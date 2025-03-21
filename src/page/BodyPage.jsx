import Header from "../component/Header"
import Footer from "../component/Footer"


const BodyPage = () => {
    return (
        <>
            <Header />
            <div className="main">
                바디 설정 페이지
            </div>
            <Footer currentPage={'body'} />
        </>
    )
}


export default BodyPage