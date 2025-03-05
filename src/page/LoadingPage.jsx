import Modal from '../component/Modal'
import '/src/css/loading.css'

function LoadingPage() {
    return (
        <>
            <div id="background_img">
                <div className='top'>
                    <div className='logo' />
                </div>
                <div id='middle'>
                    <div id='title' className='title'>
                        AXIO VR
                    </div>

                    <div id='content' className='content'>
                        Bringing full-body tracking  to everyone
                    </div>

                </div>

                <div className='bottom'>
                    <div className='version'>v.1.0.0</div>
                    <div id='serialkey' className='serialkey'>
                        <Modal />
                    </div>
                </div>
            </div>
        </>
      )
}

export default LoadingPage