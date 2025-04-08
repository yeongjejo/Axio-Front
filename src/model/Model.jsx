import { Canvas, useFrame, useThree } from "@react-three/fiber";
import SkeletonModel from "./SkeletonFK";
import { Mask, OrbitControls } from "@react-three/drei";
import MixamoModel from "./MixamoModel";

const CameraController = () => {
    const { camera } = useThree();

    useFrame(() => {
        camera.lookAt(0, 5, 0);
    });

    return null;
}
  
function Model({sensorID, model}) {
    console.log(model)
    return (
        <>  
            <Canvas camera={{ position: [-15, 23, 20], fov: 60, near: 0.1, far: 1000}}>
                <CameraController />
                <OrbitControls />

                {!model && (
                    <>
                        <directionalLight position={[5, 10, 5]} intensity={2} castShadow />
                        <ambientLight intensity={0.7} />
                        <MixamoModel />
                    </>
                )}
                
                {model && (
                    <>
                        <ambientLight intensity={2.0} />
                        <SkeletonModel sensorID={sensorID}/>
                    </>
                )}
                

                
                
                {/* 바닥 그리드 */}
                {/* <gridHelper args={[100, 100, 'red', 'red']}  position={[0, -0.5, 0]}  /> */}
                <gridHelper args={[100, 100]}  position={[0, -0.3, 0]}  />


            </Canvas>
        </>
    )
}

export default Model