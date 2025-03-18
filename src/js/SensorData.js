class SensorData {
    constructor(id, firmware, type, wearStatus, calibration, temperature, tps) {
        this.id = id // 센서아이디
        this.firmware = firmware;  // 펌웨어 버전
        this.type = type;          // 센서 타입
        this.wearStatus = wearStatus; // 착용 상태
        this.calibration = calibration; // 보정 상태
        this.temperature = temperature; // 온도 (°C)
        this.tps = tps;  // TPS 값
    }
  }
  
export default SensorData;