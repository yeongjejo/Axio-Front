import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Mask, OrbitControls } from "@react-three/drei";

import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/Addons.js";



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

    useEffect(() => {
        const loader = new FBXLoader();
        // loader.load("/model/character2.fbx", (fbx) => {
        loader.load("/model/XBot.fbx", (fbx) => {
            // console.log(fbx)
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
                    console.log(boneCheck)
                    if (boneCheck[0]) {
                        console.log(111)
                        boneRefs.current[boneCheck[1]] = child; // Bone 저장
                        child.quaternion.copy(new THREE.Quaternion().random().normalize())
                    }
                }
            });
        }

        console.log(boneRefs.current)
    }, [character]);

    
    // useFrame(() => {
    //     if (boneRefs.current["mixamorigHips"]) {
    //         boneRefs.current["mixamorigHips"].quaternion.multiplyQuaternions(
    //             boneRefs.current["mixamorigHips"].quaternion,
    //             new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.01)
    //         );
    //     }
    // });

    
    return character ? <primitive object={character} ref={fbxRef} /> : null;
}

export default MixamoModel