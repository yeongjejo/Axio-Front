
import '/src/css/header.css'

function onClickMinusBtn() {
    console.log('- 버튼 클릭')
}

function onClickPlusBtn() {
    console.log('+ 버튼 클릭')
}

function onClickCloseBtn() {
    console.log('x 버튼 클릭')
}

function onClickTposeBtn() {
    console.log('T-Pose 버튼 클릭')
}

const Header = () => {
    return (
        <>
            <div className='header'>
            <div className='left-info'>
                <div className='wifi-logo' />
                <div className='wifi-state'>1ms</div>
                <div className='spacing' />
                <div className='tpose-logo' />
                <div className='wifi-state' onClick={onClickTposeBtn}>전체정렬</div>
            </div>

            <div className='main-logo' />

            <div className='right-info'>
                <div className='widow-state' onClick={onClickMinusBtn}>
                -
                </div>
                <div className='widow-state' onClick={onClickPlusBtn}>
                +
                </div>
                <div className='widow-state' onClick={onClickCloseBtn}>
                x
                </div>
            </div>
            </div>
        </>
    )
};
  
export default Header;