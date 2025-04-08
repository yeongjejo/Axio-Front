
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

var check = 0
function setBoneWorldQuaternion(boneRef, quaternion) {
    if(check % 500 == 1) {
        const parentQuaternion = new THREE.Quaternion();

        // 현재 객체의 부모 쿼터니언을 가져오기
        boneRef.parent.getWorldQuaternion(parentQuaternion);

        // 부모의 역(역원) 쿼터니언을 구한 후 곱하기
        const localQuaternion = quaternion.clone().premultiply(parentQuaternion.invert()); 

        // 로컬 쿼터니언으로 적용
        boneRef.quaternion.copy(localQuaternion);
    }
    check += 1
    
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
    useFrame((state, delta) => {
        // console.log('boneRefList2', boneRefList)
        boneRefList.forEach((ref, index) => {
            setBoneWorldPosition(ref.parent, ref, new THREE.Vector3(1,2,3)) // 포지션 할당 시
            // setBoneWorldQuaternion(ref, new THREE.Quaternion().random().normalize()) // 쿼터니언 할당 시
            
        });
        
    })


}


export default BoneRotation

