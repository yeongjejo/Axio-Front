import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mask, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";
import { rand } from "three/tsl";


// 관절 사이를 연결하는 막대 생성 함수
// const Stick = ({ start, end }) => {
//     const direction = end.clone().sub(start).normalize();
//     const length = start.distanceTo(end);
//     const midPoint = start.clone().lerp(end, 0.5);


//     // 방향에 따라 쿼터니언 계산
//     const up = new THREE.Vector3(0, 1, 0); // 월드 좌표계에서의 위쪽 방향
//     const quaternion = new THREE.Quaternion().setFromUnitVectors(up, direction); // 쿼터니언 계산
    

//     return (
//         <mesh position={midPoint} quaternion={quaternion.normalize()}>
//             <cylinderGeometry args={[0.1, 0.1, length, 16]} />
//             <meshStandardMaterial color="#ff0000" />
//         </mesh>
//     );
// };

// 🦴 Stick: 관절 사이를 연결하는 막대
const Stick = ({ parentRef, childRef }) => {
    const ref = useRef();

    useFrame(() => {
        if (parentRef.current && childRef.current) {
            const parentPos = new THREE.Vector3();
            parentRef.current.getWorldPosition(parentPos);

            const childPos = new THREE.Vector3();
            childRef.current.getWorldPosition(childPos);

            // 위치 업데이트
            const direction = childPos.clone().sub(parentPos).normalize();
            const length = parentPos.distanceTo(childPos);
            const midPoint = parentPos.clone().lerp(childPos, 0.5);
            const up = new THREE.Vector3(0, 1, 0);
            const quaternion = new THREE.Quaternion().setFromUnitVectors(up, direction);

            if (ref.current) {
                ref.current.position.copy(midPoint);
                ref.current.quaternion.copy(quaternion);
                ref.current.scale.set(1, length, 1);
            }
        }
    });

    return (
        <mesh ref={ref}>
            <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
            <meshStandardMaterial color="#000000" />
        </mesh>
    );
};



function setBoneWorldPosition(parent, child, position) {
        const parentWorldPosition = new THREE.Vector3();
        parent.current.getWorldPosition(parentWorldPosition);
        
        parentWorldPosition.divideScalar(-0.3)
        parentWorldPosition.add(position.divideScalar(0.3))
        child.current.position.set(...parentWorldPosition)
}


// 🦴 **스켈레톤 모델 컴포넌트**
function SkeletonModel() {

    const hipsRef = useRef();
    const waistRef = useRef();
    const backRef = useRef();
    const neckRef = useRef();
    const headRef = useRef();
    
    const rightShoulderRef = useRef();
    const rightUpperArmRef = useRef();
    const rightLowerArmRef = useRef();
    const rightHandRef = useRef();
    
    const leftShoulderRef = useRef();
    const leftUpperArmRef = useRef();
    const leftLowerArmRef = useRef();
    const leftHandRef = useRef();

    const rightUpperLegRef = useRef();
    const rightLowerLegRef = useRef();
    const rightFootRef = useRef();

    const leftUpperLegRef = useRef();
    const leftLowerLegRef = useRef();
    const leftFootRef = useRef();

    const boneRefList = [
        [hipsRef, [waistRef, rightUpperLegRef, leftUpperLegRef]],
        [waistRef, [backRef]],
        [backRef, [neckRef]],
        [neckRef, [headRef, rightShoulderRef, leftShoulderRef]],

        [rightShoulderRef, [rightUpperArmRef]],
        [rightUpperArmRef, [rightLowerArmRef]],
        [rightLowerArmRef, [rightHandRef]],

        [leftShoulderRef, [leftUpperArmRef]],
        [leftUpperArmRef, [leftLowerArmRef]],
        [leftLowerArmRef, [leftHandRef]],
        
        [rightUpperLegRef, [rightLowerLegRef]],
        [rightLowerLegRef, [rightFootRef]],

        [leftUpperLegRef, [leftLowerLegRef]],
        [leftLowerLegRef, [leftFootRef]],
    ]


    var check = 0

    useFrame((state, delta) => {
        // console.log(refsReady)
        
        if(check % 10 == 1) {
            rightUpperLegRef.current.quaternion.copy(new THREE.Quaternion().random().normalize())
            rightLowerLegRef.current.quaternion.copy(new THREE.Quaternion().random().normalize())
            rightFootRef.current.quaternion.copy(new THREE.Quaternion().random().normalize())

        }
        
        check += 1
    })


    useEffect(() => {
        hipsRef.current.position.set(0, 10, 0);

        setBoneWorldPosition(hipsRef, waistRef, new THREE.Vector3(0, 12, 0))
        setBoneWorldPosition(waistRef, backRef, new THREE.Vector3(0, 14, 0))
        setBoneWorldPosition(backRef, neckRef, new THREE.Vector3(0, 16, 0))
        setBoneWorldPosition(neckRef, headRef, new THREE.Vector3(0, 17, 0))
        
        setBoneWorldPosition(neckRef, rightShoulderRef, new THREE.Vector3(-1.5, 15.5, 0))
        setBoneWorldPosition(rightShoulderRef, rightUpperArmRef, new THREE.Vector3(-3, 15, 0))
        setBoneWorldPosition(rightUpperArmRef, rightLowerArmRef, new THREE.Vector3(-6, 15, 0))
        setBoneWorldPosition(rightLowerArmRef, rightHandRef, new THREE.Vector3(-9, 15, 0))

        setBoneWorldPosition(neckRef, leftShoulderRef, new THREE.Vector3(1.5, 15.5, 0))
        setBoneWorldPosition(leftShoulderRef, leftUpperArmRef, new THREE.Vector3(3, 15, 0))
        setBoneWorldPosition(leftUpperArmRef, leftLowerArmRef, new THREE.Vector3(6, 15, 0))
        setBoneWorldPosition(leftLowerArmRef, leftHandRef, new THREE.Vector3(9, 15, 0))

        setBoneWorldPosition(hipsRef, rightUpperLegRef, new THREE.Vector3(-2, 10, 0))
        setBoneWorldPosition(rightUpperLegRef, rightLowerLegRef, new THREE.Vector3(-2, 5, 0))
        setBoneWorldPosition(rightLowerLegRef, rightFootRef, new THREE.Vector3(-2, 0, 0))
        
        setBoneWorldPosition(hipsRef, leftUpperLegRef, new THREE.Vector3(2, 10, 0))
        setBoneWorldPosition(leftUpperLegRef, leftLowerLegRef, new THREE.Vector3(2, 5, 0))
        setBoneWorldPosition(leftLowerLegRef, leftFootRef, new THREE.Vector3(2, 0, 0))

    }, []);


    return (
        <>
            {/* Hips */}
            <mesh ref={hipsRef} scale={0.3} >
                <sphereGeometry />
                <meshStandardMaterial color="red" />
                <axesHelper scale={3} />

                {/* Waist */}
                <mesh ref={waistRef} >
                    <sphereGeometry />
                    <meshStandardMaterial color="lightseagreen" />
                    <axesHelper scale={3} />

                    {/* Back */}
                    <mesh ref={backRef} >
                        <sphereGeometry />
                        <meshStandardMaterial color="lightblue" />
                        <axesHelper scale={3} />

                        {/* Neck */}
                        <mesh ref={neckRef} >
                            <sphereGeometry />
                            <meshStandardMaterial color="darkslateblue" />
                            <axesHelper scale={3} />
 
                            {/* Head */}
                            <mesh ref={headRef} >
                                <sphereGeometry />
                                <meshStandardMaterial color="black" />
                                <axesHelper scale={3} />
                            </mesh> 
                           
                            {/* Right Shoulder */}
                            <mesh ref={rightShoulderRef} >
                                <sphereGeometry />
                                <meshStandardMaterial color="hotpink" />
                                <axesHelper scale={3} />

                                {/* Right Upper Arm */}
                                <mesh ref={rightUpperArmRef} >
                                    <sphereGeometry />
                                    <meshStandardMaterial color="hotpink" />
                                    <axesHelper scale={3} />
                                    
                                    {/* Right Lower Arm */}
                                    <mesh ref={rightLowerArmRef} >
                                        <sphereGeometry />
                                        <meshStandardMaterial color="orange" />
                                        <axesHelper scale={3} />

                                        {/* Right Hand */}
                                        <mesh ref={rightHandRef} >
                                            <sphereGeometry />
                                            <meshStandardMaterial color="saddlebrown" />
                                            <axesHelper scale={3} />
                                        </mesh>  
                                    </mesh> 
                                </mesh>  
                            </mesh>


                            {/* Left Shoulder */}
                            <mesh ref={leftShoulderRef} >
                                <sphereGeometry />
                                <meshStandardMaterial color="hotpink" />
                                <axesHelper scale={3} />
                                
                                {/* Left Upper Arm */}
                                <mesh ref={leftUpperArmRef}  >
                                    <sphereGeometry />
                                    <meshStandardMaterial color="hotpink" />
                                    <axesHelper scale={3} />
                                    
                                    {/* Left Lower Arm */}
                                    <mesh ref={leftLowerArmRef} >
                                        <sphereGeometry />
                                        <meshStandardMaterial color="orange" />
                                        <axesHelper scale={3} />

                                        {/* Left Hand */}
                                        <mesh ref={leftHandRef} >
                                            <sphereGeometry />
                                            <meshStandardMaterial color="saddlebrown" />
                                            <axesHelper scale={3} />
                                        </mesh>  
                                    </mesh>  
                                </mesh> 
                            </mesh>

                        </mesh>   
                    </mesh>   

                </mesh>   

                {/* Right Upper Leg */}
                <mesh ref={rightUpperLegRef}  >
                    <sphereGeometry  />
                    <meshStandardMaterial color="yellow" />
                    <axesHelper scale={3} />
                    {/* Right Lower Leg */}
                    <mesh ref={rightLowerLegRef} >
                            <sphereGeometry  />
                            <meshStandardMaterial color="green" />
                            <axesHelper scale={3} />
                            {/* Right Foot */}
                            <mesh ref={rightFootRef} >
                                    <sphereGeometry  />
                                    <meshStandardMaterial color="blue" />
                                    <axesHelper scale={3} />
                            </mesh>   
                    </mesh> 
                </mesh>   

                {/* Left Upper Leg */}
                <mesh ref={leftUpperLegRef}>
                    <sphereGeometry  />
                    <meshStandardMaterial color="yellow" />
                    <axesHelper scale={3} />

                     {/* Right Lower Leg */}
                    <mesh ref={leftLowerLegRef} >
                        <sphereGeometry  />
                        <meshStandardMaterial color="green" />
                        <axesHelper scale={3} />
                        {/* Right Foot */}
                        <mesh ref={leftFootRef}  >
                            <sphereGeometry  />
                            <meshStandardMaterial color="blue" />
                            <axesHelper scale={3} />
                        </mesh>   
                    </mesh> 
                </mesh>   

            </mesh>   

            {/* 🔹 useEffect 이후 실행 */}
            {/* {      
                refsReady &&
                    boneRefList.map(([parent, childList], index) => {

                        console.log(1)
                        let parentPosition = new THREE.Vector3();
                        parent.current.getWorldPosition(parentPosition);

                        return childList.map((child, i) => {
                            if (!child.current) return null;

                            let childPosition = new THREE.Vector3();
                            child.current.getWorldPosition(childPosition);

                            return (
                                <Stick
                                    key={`stick-${index}-${i}`}
                                    start={parentPosition}
                                    end={childPosition}
                                />
                            );
                        });
                    })
            } */}
             {/* Stick 동적 업데이트 */}
             {
             boneRefList.map(([parent, childList], index) => {
                console.log(1)
                return childList.map((child, i) => (
                    <Stick key={`stick-${index}-${i}`} parentRef={parent} childRef={child} />
                ))
             }
                
            )}

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