import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mask, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";
import { rand } from "three/tsl";



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

    var check = 0

    useFrame((state, delta) => {
        if(check % 30 == 1) {
            // rightUpperLegRef.current.rotation.x = Math.floor(Math.random() * 361)
            // rightUpperLegRef.current.rotation.y = Math.floor(Math.random() * 361)
            // rightUpperLegRef.current.rotation.z = Math.floor(Math.random() * 361)

            // rightLowerLegRef.current.rotation.x = Math.floor(Math.random() * 361)
            // rightLowerLegRef.current.rotation.y = Math.floor(Math.random() * 361)
            // rightLowerLegRef.current.rotation.z = Math.floor(Math.random() * 361)

            // rightFootRef.current.rotation.x = Math.floor(Math.random() * 361)
            // rightFootRef.current.rotation.y = Math.floor(Math.random() * 361)
            // rightFootRef.current.rotation.z = Math.floor(Math.random() * 361)

             // 랜덤한 축 벡터 (정규화)
            const randomAxis1 = new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize();
            const randomAxis2 = new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize();
            const randomAxis3 = new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize();
            
            // 랜덤한 회전 각도 (0 ~ π 범위)
            const randomAngle1 = Math.random() * Math.PI;
            const randomAngle2 = Math.random() * Math.PI;
            const randomAngle3 = Math.random() * Math.PI;

            const randomRotation1 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);
            const randomRotation2 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);
            const randomRotation3 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);

            rightUpperLegRef.current.quaternion.multiply(randomRotation1);
            // rightLowerLegRef.current.quaternion.multiply(randomRotation2);
            // rightFootRef.current.quaternion.multiply(randomRotation3);



            let pos1 = new THREE.Vector3();
            rightUpperLegRef.current.getWorldPosition(pos1)

            let pos2 = new THREE.Vector3();
            rightLowerLegRef.current.getWorldPosition(pos2)

            console.log(pos1.distanceTo(pos2))
            
            pos1 = new THREE.Vector3();
            rightLowerLegRef.current.getWorldPosition(pos1)

            pos2 = new THREE.Vector3();
            rightFootRef.current.getWorldPosition(pos2)
            
            console.log(pos1.distanceTo(pos2))
            console.log('--------------------')

        }
        // check = 1
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

        console.log(rightUpperLegRef.current.quaternion)

        const randomAxis1 = new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize();
        const randomAxis2 = new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize();
        const randomAxis3 = new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize();
        
        // 랜덤한 회전 각도 (0 ~ π 범위)
        const randomAngle1 = Math.random() * Math.PI;
        const randomAngle2 = Math.random() * Math.PI;
        const randomAngle3 = Math.random() * Math.PI;

        const randomRotation1 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);
        const randomRotation2 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);
        const randomRotation3 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);

        rightUpperLegRef.current.quaternion.multiply(randomRotation1);
        rightLowerLegRef.current.quaternion.multiply(randomRotation1);

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
                <mesh ref={rightUpperLegRef}  scale={3.3}  >
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
                <mesh ref={leftUpperLegRef} >
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