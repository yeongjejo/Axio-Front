import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Mask, OrbitControls } from "@react-three/drei";

import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/Addons.js";
import BoneRotation from "./BoneRotaion";



function containsValue(obj, value) {
    const foundEntry = Object.entries(obj).find(([key, val]) => val === value);
    return foundEntry ? [true, foundEntry[0]] : [false, null];
}


function MixamoModel() {
    const boneMapping = {
        hips: "mixamorigHips",
        waist: "mixamorigSpine",
        back: "mixamorigSpine2",
        neck: "mixamorigNeck",
        head: "mixamorigHead",
    
        rightShoulder: "mixamorigRightShoulder",
        rightUpperArm: "mixamorigRightArm",
        rightLowerArm: "mixamorigRightForeArm",
        rightHand: "mixamorigRightHand",
    
        leftShoulder: "mixamorigLeftShoulder",
        leftUpperArm: "mixamorigLeftArm",
        leftLowerArm: "mixamorigLeftForeArm",
        leftHand: "mixamorigLeftHand",
    
        rightUpperLeg: "mixamorigRightUpLeg",
        rightLowerLeg: "mixamorigRightLeg",
        rightFoot: "mixamorigRightFoot",
    
        leftUpperLeg: "mixamorigLeftUpLeg",
        leftLowerLeg: "mixamorigLeftLeg",
        leftFoot: "mixamorigLeftFoot",
    };

    const fbxRef = useRef();
    const [character, setCharacter] = useState(null);
    const boneRefs = useRef({}); // Bone 저장소
    const [isReady, setIsReady] = useState(false); // ✅ bone 준비 상태

    useEffect(() => {
        const loader = new FBXLoader();
        // loader.load("/model/test3.fbx", (fbx) => {
        loader.load("/model/YBot.fbx", (fbx) => {
            fbx.scale.set(0.1, 0.1, 0.1); // 모델 크기 조정
            setCharacter(fbx);
        });
    }, []);

    
    useEffect(() => {
        if (character) {
            character.traverse((child) => {
                if (child.isBone) {
                    // console.log("Bone Found:", child.quaternion); // 모든 Bone 확인
                    const boneCheck = containsValue(boneMapping, child.name)
                    // console.log(boneCheck)
                    if (boneCheck[0]) {
                        // 두번 저장되는데 두번째는 자식이 짤려있음
                        // 그래서 최초꺼만 저장하도록
                        if (!boneRefs.current[boneCheck[1]]) {
                            boneRefs.current[boneCheck[1]] = child; // Bone 저장

                        }
    
                    }
                }
                
                setIsReady(true);
                // 다음주에 와서 boneRefs순서 스켈레톤 순서와 맞춰야됨
                console.log(boneRefs)

            });
        }
    }, [character]);

    // useFrame(() => {
    //     if (isReady && boneRefs.current['hips']) {
    //         // console.log(boneRefs.current['hips'], 111)

    //         boneRefs.current['hips'].quaternion.copy(new THREE.Quaternion().random().normalize())
            
    //         // console.log(boneRefs.current['hips'], 111)

    //     }
    // }, [isReady]);




    
    return (
        <>
            {character && <primitive object={character} ref={fbxRef} />}
            {/* {isReady && (
                // console.log(Object.values(boneRefs.current), 111)
                <BoneRotation
                    boneRefList={Object.values(boneRefs.current)} // ✅ 배열로 넘김
                />
            )} */}
        </>
    );
}

export default MixamoModel