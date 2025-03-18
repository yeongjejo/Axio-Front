
import '/src/css/header.css'

const Header = () => {
    return (
        <>
            <div className='header'>
            <div className='left-info'>
                <div className='wifi-logo' />
                <div className='wifi-state'>1ms</div>
                <div className='spacing' />
                <div className='tpose-logo' />
                <div className='wifi-state'>전체정렬</div>
            </div>

            <div className='main-logo' />

            <div className='right-info'>
                <div className='widow-state'>
                -
                </div>
                <div className='widow-state'>
                +
                </div>
                <div className='widow-state'>
                x
                </div>
            </div>
            </div>
        </>
    )
};
  
export default Header;