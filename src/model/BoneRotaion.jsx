
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


function BoneRotation({boneRefList}) {
    useFrame((state, delta) => {
        // console.log('boneRefList2', boneRefList)
        boneRefList.forEach((ref, index) => {
            console.log(ref)
            setBoneWorldQuaternion(ref, new THREE.Quaternion().random().normalize())
            
        });
    })


}


export default BoneRotation