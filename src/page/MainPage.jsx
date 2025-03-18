import { useEffect, useState } from 'react';
import '/src/css/main.css'
import { useFrame } from '@react-three/fiber';
import Skeleton from '../component/Skeleton';
import SkeletonFK from '../component/SkeletonFK';
import SensorData from '/src/js/SensorData.js'
import Header from '../component/Header';



function MainPage() {
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

  // const [sensorData, setSensorData] = useState([]);
  // CEF에서 데이터를 업데이트하는 함수
  // useEffect(() => {
  //   window.updateSensorData = function (data) {
  //     try {
  //       const parsedData = JSON.parse(data);
  //       setSensorData(parsedData); // 배열 데이터 업데이트
  //     } catch (error) {
  //       console.error("JSON Parsing Error:", error);
  //     }
  //   };
  // }, []);
  

  return (
      <>
        <Header />

        <div className="main">
          <div className='three'>
            <div className='three-postion'>
              {/* {console.log(selectedSensor)} */}
              <SkeletonFK sensorID={selectedSensor}/>
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




        <div className="footer">
            <div className='foot-bar'>
              
              <div className='foot-bar-btn'>
                <div className='menu-logo' />
                홈
              </div>
              <div className='foot-bar-btn'>
              <div className='menu-logo' />
                연결
              </div>
              <div className='foot-bar-btn'>
              <div className='menu-logo' />
                그래프
              </div>
              <div className='foot-bar-btn'>
              <div className='menu-logo' />
                햅틱
              </div>
              <div className='foot-bar-btn'>
              <div className='menu-logo' />
                바디설정
              </div>
              
              <div className='foot-bar-btn'>
              <div className='menu-logo' />
                설정
              </div>


            </div>
        </div>
      </>
    )
}

export default MainPage