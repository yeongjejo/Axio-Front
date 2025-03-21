import Header from "../component/Header"
import Footer from "../component/Footer"

const SettingPage = () => {
    return (
        <>
            <Header />
            <div className="main">
                설정페이지
            </div>
            <Footer currentPage={'setting'} />
        </>
    )
}


export default SettingPage