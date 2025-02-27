import { useEffect, useRef, useState } from "react";
import '/src/css/modal.css'
import { useNavigate } from "react-router-dom";

const Modal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();
    const navigate = useNavigate();

    return (
      <>
        <div className="modal-open-btn" onClick={() => setModalOpen(true)}>
            시리얼키 입력 확인 -&gt;
            {/* 시리얼키 입력 확인 → */}
        </div>

        {
          modalOpen &&
          <div className="modal-container" ref={modalBackground} onClick={e => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}>
            <div className="modal-content">
              <p>시리얼키 입력</p>
              <div className="modal-input-group" >
                <input className="modal-input"/>
                <div className="space"/>
                <input className="modal-input"/>
                <div className="space"/>
                <input className="modal-input"/>
                <div className="space"/>
                <input className="modal-input"/>
              </div>

              <div className="modal-btn-group">
                <div className={'modal-btn'} onClick={() => navigate("/main")}>
                    저장
                </div>
                <div className="space"/>
                <div className={'modal-btn'} onClick={() => setModalOpen(false)}>
                    취소
                </div>
              </div>
            </div>
          </div>
        }
      </>
    );
  };
  
  export default Modal;