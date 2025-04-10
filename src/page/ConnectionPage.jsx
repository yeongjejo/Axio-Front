import Header from "../component/Header"
import Footer from "../component/Footer"
import '/src/css/connection.css'

const ConnectionPage = () => {
    return (
        <>
            <Header />
            <div className="connection-main">
                <div className="left-main">
                    <div className="left-main-area">
                        <div className="connection-main-img">
                            <div className="connection-left-btn">다른 USB 포트 검색</div>
                            <div>2번 포트가 연결되었습니다.</div>
                        </div>
                        <div className="connection-main-left-botmom">
                            <div className="big-btn">
                                <div className="big-btn-area">
                                    <div className="connection-img"></div>
                                    <div>COM2</div>
                                </div>
                            </div>
                            <div className="big-btn">연결하기</div>
                            
                        </div>
                    </div>
                </div>
                <div className="right-main">
                    <div className="connection-info-enter">
                        <div>공유 이미지</div>
                        <div>공유기 선택</div>
                        <div className="connection-right-btn">비밀번호입력</div>
                        <input type="text" placeholder="비밀번호 입력" className="connection-input"></input>
                        <input type="text" placeholder="확인버튼 들어갈곳" className="connection-input"></input>
                    </div>
                    
                </div>
            </div>
            <Footer currentPage={"connection"} />
        </>
    )
}


export default ConnectionPage