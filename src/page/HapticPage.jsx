import Header from "../component/Header"
import Footer from "../component/Footer"

const HapticPage = () => {
    return (
        <>
            <Header />
            <div className="main">
                햅틱 페이지
            </div>
            <Footer currentPage={'haptic'} />
        </>
    )

}


export default HapticPage