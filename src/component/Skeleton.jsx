import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mask, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";


const Stick = ({ start, end }) => {
    const direction = end.clone().sub(start).normalize();
    const length = start.distanceTo(end);
    const midPoint = start.clone().lerp(end, 0.5);


    // 방향에 따라 쿼터니언 계산
    const up = new THREE.Vector3(0, 1, 0); // 월드 좌표계에서의 위쪽 방향
    const quaternion = new THREE.Quaternion().setFromUnitVectors(up, direction); // 쿼터니언 계산
    

    return (
        <mesh position={midPoint} quaternion={quaternion.normalize()}>
            <cylinderGeometry args={[0.1, 0.1, length, 16]} />
            <meshStandardMaterial color="black" />
        </mesh>
    );
};




// 🦴 **스켈레톤 모델 컴포넌트**
function SkeletonModel() {
    const bonePosions = new Map();
    bonePosions.set('Hips',     [useRef(), [0, 10, 0]]);
    bonePosions.set('Waist',    [useRef(), [0, 12, 0]]);
    bonePosions.set('Back',     [useRef(), [0, 14, 0]]);
    bonePosions.set('Neck',     [useRef(), [0, 16, 0]]);
    bonePosions.set('Head',     [useRef(), [0, 17, 0]]);

    bonePosions.set('RightUpperArm', [useRef(), [-3, 15, 0]]);
    bonePosions.set('RightLowerArm', [useRef(), [-6, 15, 0]]);
    bonePosions.set('RightHand',     [useRef(), [-9, 15, 0]]);

    bonePosions.set('LeftUpperArm', [useRef(), [3, 15, 0]]);
    bonePosions.set('LeftLowerArm', [useRef(), [6, 15, 0]]);
    bonePosions.set('LeftHand',     [useRef(), [9, 15, 0]]);

    bonePosions.set('RightUpperLeg', [useRef(), [-2, 10, 0]]);
    bonePosions.set('RightLowerLeg', [useRef(), [-2, 5, 0]]);
    bonePosions.set('RightFoot',     [useRef(), [-2, 0, 0]]);

    bonePosions.set('LeftUpperLeg', [useRef(), [2, 10, 0]]);
    bonePosions.set('LeftLowerLeg', [useRef(), [2, 5, 0]]);
    bonePosions.set('LeftFoot',     [useRef(), [2, 0, 0]]);


    const boneStructure = new Map();
    boneStructure.set('Hips', ['Waist', 'RightUpperLeg', 'LeftUpperLeg'])
    boneStructure.set('Waist', ['Back'])
    boneStructure.set('Back', ['Neck'])
    boneStructure.set('Neck', ['Head', 'RightUpperArm', 'LeftUpperArm'])

    boneStructure.set('RightUpperArm', ['RightLowerArm'])
    boneStructure.set('RightLowerArm', ['RightHand'])

    boneStructure.set('LeftUpperArm', ['LeftLowerArm'])
    boneStructure.set('LeftLowerArm', ['LeftHand'])

    boneStructure.set('RightUpperLeg', ['RightLowerLeg'])
    boneStructure.set('RightLowerLeg', ['RightFoot'])
    
    boneStructure.set('LeftUpperLeg', ['LeftLowerLeg'])
    boneStructure.set('LeftLowerLeg', ['LeftFoot'])


    return (
        <>
            {/* 관절 큐브 생성 */}
            {
                Array.from(bonePosions).map(([key, value], index) => (
                    <mesh key={key} ref={value[0]} scale={0.3} position={value[1]}>
                        <sphereGeometry />
                        <meshStandardMaterial color="blue" />
                        <axesHelper scale={3} />
                    </mesh>
                ))
            }  


            {/* 관절 막대 생성 */}
            {
                Array.from(boneStructure).map(([key, value], index) => (
                    value.map((item, i) => {  // ✅ `{}` 사용하여 코드 블록 생성
                        // console.log(bonePosions.get(key)[0].current.position); 
                        // console.log(bonePosions.get(key)[1]); 

                        return (
                            <Stick 
                                key={`${key}-${item}`} 
                                start={new THREE.Vector3(...bonePosions.get(key)[1])} 
                                end={new THREE.Vector3(...bonePosions.get(item)[1])} 
                            />
                        );
                    })
                ))
            }

        </>

    );
  }
  
  
function Skeleton() {

    
    return (
        <>  
            <Canvas camera={{ position: [0, 30, 30], fov: 60, near: 0.1, far: 1000 }}>
                <ambientLight intensity={2.0} />
                <OrbitControls />
                
                <SkeletonModel />
                
                
                {/* 바닥 그리드 */}
                {/* <gridHelper args={[100, 100, 'red', 'red']}  position={[0, -0.5, 0]}  /> */}
                <gridHelper args={[100, 100]}  position={[0, -0.3, 0]}  />

            </Canvas>
        </>
    )
}

export default Skeleton