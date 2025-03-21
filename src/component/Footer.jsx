
import { useNavigate } from 'react-router-dom';
import '/src/css/footer.css'

function Footer( location ) {

    const currentPage = location.currentPage
    
    const navigate = useNavigate();

    return (
        <>
            <div className="footer">
                <div className='foot-bar'>
                    <div className={`foot-bar-btn ${currentPage === "main" ? "active" : ""}`} onClick={() => navigate("/main",)}>
                        <div className={`menu-logo ${currentPage === "main" ? "active" : ""}`} />
                        홈
                    </div>
                    <div className={`foot-bar-btn ${currentPage === "connection" ? "active" : ""}`} onClick={() => navigate("/connection",)}>
                        <div className={`menu-logo ${currentPage === "connection" ? "active" : ""}`}/>
                        연결
                    </div>
                    <div className={`foot-bar-btn ${currentPage === "graph" ? "active" : ""}`} onClick={() => navigate("/graph",)}>
                        <div className={`menu-logo ${currentPage === "graph" ? "active" : ""}`}/>
                        그래프
                    </div>
                    <div className={`foot-bar-btn ${currentPage === "haptic" ? "active" : ""}`} onClick={() => navigate("/haptic",)}>
                        <div className={`menu-logo ${currentPage === "haptic" ? "active" : ""}`}/>
                        햅틱
                    </div>
                    <div className={`foot-bar-btn ${currentPage === "body" ? "active" : ""}`} onClick={() => navigate("/body",)}>
                        <div className={`menu-logo ${currentPage === "body" ? "active" : ""}`}/>
                        바디설정
                    </div>
                    
                    <div className={`foot-bar-btn ${currentPage === "setting" ? "active" : ""}`} onClick={() => navigate("/setting",)}>
                        <div className={`menu-logo ${currentPage === "setting" ? "active" : ""}`}/>
                        설정
                    </div>
                </div>
            </div>
        </>
    )

}

export default Footer