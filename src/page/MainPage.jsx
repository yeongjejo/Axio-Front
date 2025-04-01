import { useEffect, useState } from 'react';
import '/src/css/main.css'
import { useFrame } from '@react-three/fiber';
import Skeleton from '../component/Skeleton';
import SkeletonFK from '../component/SkeletonFK';
import SensorData from '/src/js/SensorData.js'
import Header from '../component/Header';
import Footer from '../component/Footer';
import { useLocation } from 'react-router-dom';



function MainPage() {
  // const location = useLocation().state
  // console.log(location)

  const [selectedSensor, setsSlectedSensor] = useState('')

  const sensorData = [
    new SensorData('hips', "1.2.0", "IMU", "Worn", "Calibrated", 36.5, 120),
    new SensorData('waist', "v1.0.1", "Pressure", "Not Worn", "Uncalibrated", 35.0, 100),
    new SensorData('back', "v1.0.2", "Temperature", "Worn", "Calibrated", 37.0, 110),
    new SensorData('neck', "v1.0.2", "Temperature", "Worn", "Calibrated", 37.0, 110),
    new SensorData('head', "v1.0.2", "Temperature", "Worn", "Calibrated", 37.0, 110),
    new SensorData('rightShoulder', "v1.0.2", "Temperature", "Worn", "Calibrated", 37.0, 110),
    new SensorData('rightUpperArm', "v1.0.2", "Temperature", "Worn", "Calibrated", 37.0, 110),
    new SensorData('rightLowerArm', "v1.0.2", "Temperature", "Worn", "Calibrated", 37.0, 110),
    new SensorData('rightHand', "v1.0.2", "Temperature", "Worn", "Calibrated", 37.0, 110),
    new SensorData('leftShoulder', "v1.0.2", "Temperature", "Worn", "Calibrated", 37.0, 110),
    new SensorData('leftUpperArm', "v1.0.2", "Temperature", "Worn", "Calibrated", 37.0, 110),
    new SensorData('leftLowerArm', "v1.0.2", "Temperature", "Worn", "Calibrated", 37.0, 110),
    new SensorData('leftHand', "v1.0.2", "Temperature", "Worn", "Calibrated", 37.0, 110),
    new SensorData('rightUpperLeg', "v1.0.2", "Temperature", "Worn", "Calibrated", 37.0, 110),
    new SensorData('rightLowerLeg', "v1.0.2", "Temperature", "Worn", "Calibrated", 37.0, 110),
    new SensorData('rightFoot', "v1.0.2", "Temperature", "Worn", "Calibrated", 37.0, 110),
    new SensorData('leftUpperLeg', "v1.0.2", "Temperature", "Worn", "Calibrated", 37.0, 110),
    new SensorData('leftLowerLeg', "v1.0.2", "Temperature", "Worn", "Calibrated", 37.0, 110),
    new SensorData('leftFoot', "v1.0.2", "Temperature", "Worn", "Calibrated", 37.0, 110),
  ];


  // 센서 버튼 클릭 이벤트
  useEffect(() => {
    for(let sensor of sensorData) {
      const btn = document.getElementById(sensor.id);
      if (btn) {
        const handleClick = () => {
          // console.log(btn.id)
          setsSlectedSensor(btn.id)
        }
        
        btn.addEventListener('click', (handleClick));

      }
    }
  }, []); // 빈 배열을 넣어 한 번만 실행되도록 설정



  const [sensorData2, setSensorData2] = useState([]);
  // CEF에서 데이터를 업데이트하는 함수
  useEffect(() => {
    window.updateSensorData = function (data) {
      try {
        
        console.log("데이터 수신 성공", data);
        setSensorData2(data)
        // 위에 코드가 안될시(JSON 파싱 필요시) 아래 코드로 테스트
        // const parsedData = JSON.parse(data);
        // setSensorData2(parsedData); // 배열 데이터 업데이트
        // console.log("데이터 수신 성공", sensorData2)
      } catch (error) {
        console.error("JSON Parsing Error:", error);
      }
    };
  }, []);
  
  // 19라인(sensorData) 하드 코드된 데이터 CEF에서 송수신 필요
//===================================
  // 1. C++에서 호출하는 예시
//   browser->GetMainFrame()->ExecuteJavaScript(
//     "window.updateSensorData('{\"id\": \"neck\", \"firmware\": \"v1.2.0\", \"type\": \"IMU\"}')",
//     browser->GetMainFrame()->GetURL(),
//     0
// );
//--------------------------
// 예시: 전체 JSON 데이터 전달
// std::string jsonData = R"([
//   {
//     "id": "neck",
//     "firmware": "v1.2.0",
//     "type": "IMU",
//     "wearStatus": "Worn",
//     "calibration": "Calibrated",
//     "temperature": 37.2,
//     "battery": 95
//   },
//   {
//     "id": "rightShoulder",
//     "firmware": "v1.2.0",
//     "type": "IMU",
//     "wearStatus": "Worn",
//     "calibration": "Calibrated",
//     "temperature": 36.9,
//     "battery": 90
//   }
// ])";

// // 전달할 자바스크립트 명령어 구성
// std::string jsCode = "window.updateSensorData(" + jsonData + ");";

// // 실행
// browser->GetMainFrame()->ExecuteJavaScript(jsCode, browser->GetMainFrame()->GetURL(), 0);
  
//===================================

  return (
      <>
        <Header />

        <div className="main">
          <div className='three'>
            <div className='three-postion'>
              {/* {console.log(selectedSensor)} */}
              <SkeletonFK sensorID={selectedSensor} />
              <div className="overlay-text">tt</div>
            </div>
          </div>
          <div className='sensor-list'>
            <div className='scrollbar-widget'>
            
              
              {/* ✅ 데이터 배열 크기만큼 동적으로 생성 */}
              {sensorData.map((sensor, index) => {
                // console.log(33)
                return(
                <section className="part-card" key={index} id={sensor.id}>
                  <div className='part-img' />
                  <div className='part-info'>
                    <p>펌웨어 버전 : {sensor.firmware}</p>
                    <p>타입 : {sensor.type}</p>
                    <p>착용 상태 : {sensor.wearStatus}</p>
                    <p>보정 상태 : {sensor.calibration}</p>
                    <p>온도 : {sensor.temperature}°C</p>
                    <div className='part-id'>
                      <p>SensorID : {sensor.id}</p>
                    </div>
                  </div>
                  
                
                </section>
              )})}
            
            </div>
            
          </div>

        </div>

        <Footer currentPage={'main'} />

      </>
    )
}

export default MainPage