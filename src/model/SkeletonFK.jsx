import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import BoneRotation from "./BoneRotaion";




// Stick: 관절 사이를 연결하는 막대
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
                ref.current.scale.set(2, length, 2);
            }
        }
    });

    return (
        <mesh ref={ref}>
            <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
            <meshStandardMaterial color="black" />
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



function SkeletonModel({sensorID}) {
    const [beforSelectedSensor, setBeforSelectedSensor] = useState('hips');

    // 컬러 변경
    const boneColorState = new Map();

    const [hipsColor, setHipsColor] = useState("darkslateblue");
    const [waistColor, setWaistColor] = useState("darkslateblue");
    const [backColor, setBackColor] = useState("darkslateblue");
    const [neckColor, setNeckColor] = useState("darkslateblue");
    const [headColor, setHeadColor] = useState("darkslateblue");

    const [rightShoulderColor, setRightShoulderColor] = useState("darkslateblue");
    const [rightUpperArmColor, setRightUpperArmColor] = useState("darkslateblue");
    const [rightLowerArmColor, setRightLowerArmColor] = useState("darkslateblue");
    const [rightHandColor, setRightHandColor] = useState("darkslateblue");
    
    const [leftShoulderColor, setLeftShoulderColor] = useState("darkslateblue");
    const [leftUpperArmColor, setLeftUpperArmColor] = useState("darkslateblue");
    const [leftLowerArmColor, setLeftLowerArmColor] = useState("darkslateblue");
    const [leftHandColor, setLeftHandColor] = useState("darkslateblue");

    const [rightUpperLegColor, setRightUpperLegColor] = useState("darkslateblue");
    const [rightLowerLegColor, setRightLowerLegColor] = useState("darkslateblue");
    const [rightFootColor, setRightFootsColor] = useState("darkslateblue");

    const [leftUpperLegColor, setLeftUpperLegColor] = useState("darkslateblue");
    const [leftLowerLegColor, setLeftLowerLegColor] = useState("darkslateblue");
    const [leftFootColor, setLeftFootColor] = useState("darkslateblue");

    boneColorState.set('hips', setHipsColor)
    boneColorState.set('waist', setWaistColor)
    boneColorState.set('back', setBackColor)
    boneColorState.set('neck', setNeckColor)
    boneColorState.set('head', setHeadColor)

    boneColorState.set('rightShoulder', setRightShoulderColor)
    boneColorState.set('rightUpperArm', setRightUpperArmColor)
    boneColorState.set('rightLowerArm', setRightLowerArmColor)
    boneColorState.set('rightHand', setRightHandColor)

    boneColorState.set('leftShoulder', setLeftShoulderColor)
    boneColorState.set('leftUpperArm', setLeftUpperArmColor)
    boneColorState.set('leftLowerArm', setLeftLowerArmColor)
    boneColorState.set('leftHand', setLeftHandColor)

    boneColorState.set('rightUpperLeg', setRightUpperLegColor)
    boneColorState.set('rightLowerLeg', setRightLowerLegColor)
    boneColorState.set('rightFoot', setRightFootsColor)
    
    boneColorState.set('leftUpperLeg', setLeftUpperLegColor)
    boneColorState.set('leftLowerLeg', setLeftLowerLegColor)
    boneColorState.set('leftFoot', setLeftFootColor)

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

    const [boneRefReady, setBoneRefReady] = useState(false);

    // 관절 막대 연결 용도
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

        setBoneRefReady(true)
        // console.log('2', hipsRef)

    }, []);


    useEffect(() => {
        if (boneColorState.has(sensorID)) {
            boneColorState.get(beforSelectedSensor)("darkslateblue")
            boneColorState.get(sensorID)("red")
            setBeforSelectedSensor(sensorID)
        }

    }, [sensorID]);




    return (
        <>
            {/* Hips */}
            <mesh ref={hipsRef} scale={0.3} name="hips"  >
                <sphereGeometry />
                <meshStandardMaterial color={hipsColor}/>
                <axesHelper scale={3} />

                {/* Waist */}
                <mesh ref={waistRef} >
                    <sphereGeometry />
                    <meshStandardMaterial color={waistColor} />
                    <axesHelper scale={3} />

                    {/* Back */}
                    <mesh ref={backRef} >
                        <sphereGeometry />
                        <meshStandardMaterial color={backColor} />
                        <axesHelper scale={3} />

                        {/* Neck */}
                        <mesh ref={neckRef} >
                            <sphereGeometry />
                            <meshStandardMaterial color={neckColor} />
                            <axesHelper scale={3} />
 
                            {/* Head */}
                            <mesh ref={headRef} >
                                <sphereGeometry />
                                <meshStandardMaterial color={headColor} />
                                <axesHelper scale={3} />
                            </mesh> 
                           
                            {/* Right Shoulder */}
                            <mesh ref={rightShoulderRef} >
                                <sphereGeometry />
                                <meshStandardMaterial color={rightShoulderColor} />
                                <axesHelper scale={3} />

                                {/* Right Upper Arm */}
                                <mesh ref={rightUpperArmRef} >
                                    <sphereGeometry />
                                    <meshStandardMaterial color={rightUpperArmColor}  />
                                    <axesHelper scale={3} />
                                    
                                    {/* Right Lower Arm */}
                                    <mesh ref={rightLowerArmRef} >
                                        <sphereGeometry />
                                        <meshStandardMaterial color={rightLowerArmColor} />
                                        <axesHelper scale={3} />

                                        {/* Right Hand */}
                                        <mesh ref={rightHandRef} >
                                            <sphereGeometry />
                                            <meshStandardMaterial color={rightHandColor} />
                                            <axesHelper scale={3} />
                                        </mesh>  
                                    </mesh> 
                                </mesh>  
                            </mesh>


                            {/* Left Shoulder */}
                            <mesh ref={leftShoulderRef} >
                                <sphereGeometry />
                                <meshStandardMaterial color={leftShoulderColor} />
                                <axesHelper scale={3} />
                                
                                {/* Left Upper Arm */}
                                <mesh ref={leftUpperArmRef}  >
                                    <sphereGeometry />
                                    <meshStandardMaterial color={leftUpperArmColor} />
                                    <axesHelper scale={3} />
                                    
                                    {/* Left Lower Arm */}
                                    <mesh ref={leftLowerArmRef} >
                                        <sphereGeometry />
                                        <meshStandardMaterial color={leftLowerArmColor} />
                                        <axesHelper scale={3} />

                                        {/* Left Hand */}
                                        <mesh ref={leftHandRef} >
                                            <sphereGeometry />
                                            <meshStandardMaterial color={leftHandColor} />
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
                    <meshStandardMaterial color={rightUpperLegColor} />
                    <axesHelper scale={3} />
                    {/* Right Lower Leg */}
                    <mesh ref={rightLowerLegRef} >
                            <sphereGeometry  />
                            <meshStandardMaterial color={rightLowerLegColor} />
                            <axesHelper scale={3} />
                            {/* Right Foot */}
                            <mesh ref={rightFootRef} >
                                    <sphereGeometry  />
                                    <meshStandardMaterial color={rightFootColor} />
                                    <axesHelper scale={3} />
                            </mesh>   
                    </mesh> 
                </mesh>   

                {/* Left Upper Leg */}
                <mesh ref={leftUpperLegRef}>
                    <sphereGeometry  />
                    <meshStandardMaterial color={leftUpperLegColor} />
                    <axesHelper scale={3} />

                     {/* Right Lower Leg */}
                    <mesh ref={leftLowerLegRef} >
                        <sphereGeometry  />
                        <meshStandardMaterial color={leftLowerLegColor} />
                        <axesHelper scale={3} />
                        {/* Right Foot */}
                        <mesh ref={leftFootRef}  >
                            <sphereGeometry  />
                            <meshStandardMaterial color={leftFootColor} />
                            <axesHelper scale={3} />
                        </mesh>   
                    </mesh> 
                </mesh>   

            </mesh>   


            {/* {
                boneRefReady &&
                <BoneRotation boneRefList={[
                hipsRef.current,
                waistRef.current,
                backRef.current,
                neckRef.current,
                headRef.current,
                rightShoulderRef.current,
                rightUpperArmRef.current,
                rightLowerArmRef.current,
                rightHandRef.current,
                leftShoulderRef.current,
                leftUpperArmRef.current,
                leftLowerArmRef.current,
                leftHandRef.current,
                rightUpperLegRef.current,
                rightLowerLegRef.current,
                rightFootRef.current,
                leftUpperLegRef.current,
                leftLowerLegRef.current,
                leftFootRef.current,
                ]} />
            } */}

{
                boneRefReady &&
                <BoneRotation boneRefList={[
                hipsRef.current,
                backRef.current,
                neckRef.current,

                leftShoulderRef.current,
                leftUpperArmRef.current,
                leftLowerArmRef.current,
                leftHandRef.current,

                rightShoulderRef.current,
                rightUpperArmRef.current,
                rightLowerArmRef.current,
                rightHandRef.current,


                leftUpperLegRef.current,
                leftLowerLegRef.current,
                leftFootRef.current,

                
                rightUpperLegRef.current,
                rightLowerLegRef.current,
                rightFootRef.current,
                ]} />
            }

            {/* 관절 막대 연결 */}
            {   
                boneRefList.map(([parent, childList], index) => {
                    return childList.map((child, i) => (
                        <Stick key={`stick-${index}-${i}`} parentRef={parent} childRef={child} />
                    ))
                })
            }

        </>

    );
}


export default SkeletonModel