
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { useEffect, useState } from 'react';

var check = 0
function setBoneWorldQuaternion(boneRef, quaternion) {
    const parentQuaternion = new THREE.Quaternion();

    // 현재 객체의 부모 쿼터니언을 가져오기
    boneRef.parent.getWorldQuaternion(parentQuaternion);

    // 부모의 역(역원) 쿼터니언을 구한 후 곱하기
    const localQuaternion = quaternion.clone().premultiply(parentQuaternion.invert()); 

    // 로컬 쿼터니언으로 적용
    boneRef.quaternion.copy(localQuaternion);

}


function setBoneWorldEuler(boneRef, euler) {
    const parentQuat = new THREE.Quaternion();
    const worldQuat = new THREE.Quaternion();
    
    // 부모의 월드 쿼터니언 구하기
    boneRef.parent.getWorldQuaternion(parentQuat);

    // 오일러 → 월드 쿼터니언 변환
    worldQuat.setFromEuler(euler);

    // 부모의 역 쿼터니언으로 곱해서 로컬 쿼터니언 구하기
    const localQuat = worldQuat.clone().premultiply(parentQuat.invert());

    // 최종 로컬 쿼터니언을 bone에 적용
    boneRef.quaternion.copy(localQuat);
}


function setBoneWorldPosition(parent, child, position) {
        // const parentWorldPosition = new THREE.Vector3();
        // parent.getWorldPosition(parentWorldPosition);
        
        // parentWorldPosition.divideScalar(-0.3)
        // parentWorldPosition.add(position.divideScalar(0.3))
        // child.position.set(...parentWorldPosition)

        const worldPos = new THREE.Vector3(0, 10, 0); // 목표 월드 위치
        child.position.copy(position);
        child.parent.worldToLocal(child.position);
}


function BoneRotation({boneRefList}) {
    let boneTEST = []
    

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:5173/ws');
        socket.onmessage = (e) => {
            try {
                // const [x, y, z] = e.data.split(',').map(Number);
                // console.log([x, y, z])
                // console.log("r3f에서 데이터 수신 : ", e.data)
                let test = []
                const parsedData = JSON.parse(e.data); // ← JSON 문자열을 자바스크립트 객체로 변환
                parsedData.forEach((bone) => {
                    // const {time,  name, rotation } = bone;
                    const {time, name, rotation } = bone;
                    test.push(rotation)
                    // test.push(position)
                    // console.log(new Date(time));
                    // console.log(new Date())
                    // console.log('-----------------')
                    
                    // console.log(`본 이름: ${name}`);
                    // console.log(`포지션: x=${position[0]}, y=${position[1]}, z=${position[2]}`);
                });
                boneTEST = test.map(inner => inner.slice());
            } catch (err) {
            console.error('데이터 파싱 실패:', err);
            }
        };
        return () => socket.close();
    }, []);
    useFrame((state, delta) => {
        // console.log('boneRefList2', boneRefList)
        boneRefList.forEach((ref, index) => {

            if (boneTEST.length < 17) {
                console.log(12)
                return;
            }
            // console.log(boneTEST, index)
            // console.log(boneTEST[index], index)
            // setBoneWorldPosition(ref.parent, ref, new THREE.Vector3(boneTEST[index][0] * 10, boneTEST[index][2] * 10 + 7, -boneTEST[index][1] * 10)) // 포지션 할당 시
            setBoneWorldQuaternion(ref, new THREE.Quaternion(boneTEST[index][0], boneTEST[index][1], boneTEST[index][2], boneTEST[index][3])) // 쿼터니언 할당 시
            // setBoneWorldQuaternion(ref, new THREE.Quaternion().random().normalize()) // 쿼터니언 할당 시

            // setBoneWorldEuler(ref, new THREE.Euler(boneTEST[index][0], boneTEST[index][1], boneTEST[index][2], 'zyx')) // 오일러 할당 시
            // console.log(boneTEST)
            
        });
        
    })


}


export default BoneRotation

