import { useEffect, useState } from 'react';
import '/src/css/main.css'
import { useFrame } from '@react-three/fiber';
import Skeleton from '../component/Skeleton';
import SkeletonFK from '../component/SkeletonFK';


function MainPage() {
  const [sensorData, setSensorData] = useState([]);

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
        <div className='header'>

        </div>
        <div className="main">
          <div className='three'>
            <div className='three-postion'>
              <SkeletonFK />
            </div>
          </div>
          <div className='sensor-list'>
            <div className='scrollbar-widget'>
              <section className="part-card">
                <div className='part-img'>

                </div>
                <div className='part-info'>
                  <p>펌웨어 버전 : v1.0.0</p>
                  <p>타입 : v1.0.0</p>
                  <p>착용 상태 : v1.0.0</p>
                  <p>보정상태 : v1.0.0</p>
                  <p>온도: v1.0.0</p>
                </div>
              </section>
              <section className="part-card">
                <div className='part-img'>

                </div>
                <div className='part-info'>
                  <p>펌웨어 버전 : v1.0.0</p>
                  <p>타입 : v1.0.0</p>
                  <p>착용 상태 : v1.0.0</p>
                  <p>보정상태 : v1.0.0</p>
                  <p>온도: v1.0.0</p>
                </div>
              </section>
              <section className="part-card">
                <div className='part-img'>

                </div>
                <div className='part-info'>
                  <p>펌웨어 버전 : v1.0.0</p>
                  <p>타입 : v1.0.0</p>
                  <p>착용 상태 : v1.0.0</p>
                  <p>보정상태 : v1.0.0</p>
                  <p>온도: v1.0.0</p>
                </div>
              </section>
              <section className="part-card">
                <div className='part-img'>

                </div>
                <div className='part-info'>
                  <p>펌웨어 버전 : v1.0.0</p>
                  <p>타입 : v1.0.0</p>
                  <p>착용 상태 : v1.0.0</p>
                  <p>보정상태 : v1.0.0</p>
                  <p>온도: v1.0.0</p>
                </div>
              </section>
              <section className="part-card">
                <div className='part-img'>

                </div>
                <div className='part-info'>
                  <p>펌웨어 버전 : v1.0.0</p>
                  <p>타입 : v1.0.0</p>
                  <p>착용 상태 : v1.0.0</p>
                  <p>보정상태 : v1.0.0</p>
                  <p>온도: v1.0.0</p>
                </div>
              </section>
              <section className="part-card">
                <div className='part-img'>

                </div>
                <div className='part-info'>
                  <p>펌웨어 버전 : v1.0.0</p>
                  <p>타입 : v1.0.0</p>
                  <p>착용 상태 : v1.0.0</p>
                  <p>보정상태 : v1.0.0</p>
                  <p>온도: v1.0.0</p>
                </div>
              </section>
              <section className="part-card">
                <div className='part-img'>

                </div>
                <div className='part-info'>
                  <p>펌웨어 버전 : v1.0.0</p>
                  <p>타입 : v1.0.0</p>
                  <p>착용 상태 : v1.0.0</p>
                  <p>보정상태 : v1.0.0</p>
                  <p>온도: v1.0.0</p>
                </div>
              </section>
              <section className="part-card">
                <div className='part-img'>

                </div>
                <div className='part-info'>
                  <p>펌웨어 버전 : v1.0.0</p>
                  <p>타입 : v1.0.0</p>
                  <p>착용 상태 : v1.0.0</p>
                  <p>보정상태 : v1.0.0</p>
                  <p>온도: v1.0.0</p>
                </div>
              </section>
              <section className="part-card">
                <div className='part-img'>

                </div>
                <div className='part-info'>
                  <p>펌웨어 버전 : v1.0.0</p>
                  <p>타입 : v1.0.0</p>
                  <p>착용 상태 : v1.0.0</p>
                  <p>보정상태 : v1.0.0</p>
                  <p>온도: v1.0.0</p>
                </div>
              </section>
              <section className="part-card">
                <div className='part-img'>

                </div>
                <div className='part-info'>
                  <p>펌웨어 버전 : v1.0.0</p>
                  <p>타입 : v1.0.0</p>
                  <p>착용 상태 : v1.0.0</p>
                  <p>보정상태 : v1.0.0</p>
                  <p>온도: v1.0.0</p>
                </div>
              </section>
              <section className="part-card">
                <div className='part-img'>

                </div>
                <div className='part-info'>
                  <p>펌웨어 버전 : v1.0.0</p>
                  <p>타입 : v1.0.0</p>
                  <p>착용 상태 : v1.0.0</p>
                  <p>보정상태 : v1.0.0</p>
                  <p>온도: v1.0.0</p>
                </div>
              </section>
              <section className="part-card">
                <div className='part-img'>

                </div>
                <div className='part-info'>
                  <p>펌웨어 버전 : v1.0.0</p>
                  <p>타입 : v1.0.0</p>
                  <p>착용 상태 : v1.0.0</p>
                  <p>보정상태 : v1.0.0</p>
                  <p>온도: v1.0.0</p>
                </div>
              </section>
              
              {/* ✅ 데이터 배열 크기만큼 동적으로 생성 */}
              {/* {sensorData.map((sensor, index) => (
                <section className="part-card" key={index}>
                  <div className='part-img'></div>
                  <div className='part-info'>
                    <p>펌웨어 버전 : {sensor.firmware}</p>
                    <p>타입 : {sensor.type}</p>
                    <p>착용 상태 : {sensor.wearStatus}</p>
                    <p>보정 상태 : {sensor.calibration}</p>
                    <p>온도 : {sensor.temperature}°C</p>
                    <p>TPS : {sensor.tps}</p>
                  </div>
                </section>
              ))} */}
            
            </div>
            
          </div>

        </div>




        <div className="footer">

        </div>
      </>
    )
}

export default MainPage