import Modal from '../component/Modal'
import '/src/css/loading.css'

function LoadingPage() {
    return (
        <>
            <div id="background_img">
                <div id='left'>
                    <div id='left_point' className='point'/>
                </div>

                <div id='middle'>
                    <div id='title' className='title'>
                        AXIO VR
                    </div>

                    <div id='content' className='content'>
                        Bringing full-body tracking <br />
                        to everyone
                    </div>


                    <div id='Follow' className='Follow'>
                        Follow Us -
                        <a href="https://www.youtube.com/@ipopkorea" className='spacing'>Youtube</a>
                        /
                        <a href="https://www.instagram.com/ipopkorea/" className='spacing'>Instagram</a>

                    </div>
                </div>

                <div id='right'>
                    <div id='serialkey' className='serialkey'>
                        {/* <시리얼키 입력 확인 -&gt;> */}
                        <Modal />
                    </div>
                    <div id='right_point'  className='point'/>
                </div>
            </div>
        </>
      )
}

export default LoadingPage