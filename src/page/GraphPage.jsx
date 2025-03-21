import Header from "../component/Header"
import Footer from "../component/Footer"

const GraphPage = () => {
    return (
        <>
            <Header />
            <div className="main">
                그레프 페이지
            </div>
            <Footer currentPage={'graph'} />
        </>
    )
}


export default GraphPage