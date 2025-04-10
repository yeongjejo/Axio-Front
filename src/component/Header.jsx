
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



// Front에서 tpose(전체정렬) 버튼 클릭시
// C++ 함수 성공시 로그 : 'T-Pose 함수 호출 성공!'
// C++ 함수 실패시 로그 : 'CEF 함수가 연결되지 않았습니다.'
function onClickTposeBtn() {
    console.log('T-Pose 버튼 클릭')
    if (typeof window.cefTposeButtonClicked === "function") {
        window.cefTposeButtonClicked();  // CEF C++ 측 cefTposeButtonClicked()함수 호출
        console.log('T-Pose 함수 호출 성공!')
    } else {
        console.warn('CEF 함수가 연결되지 않았습니다.'); // CEF에서 cefTposeButtonClicked함수와 연결이 안되어 있을경우
    }
}
// C++이 window 객체에 함수 등록 필요!!
// onClickTposeBtn() 함수가 호출되기 전에 C++에서 먼저 등록을 해줘야됨

// CEF 등록 예시(?)
// class TposeHandler : public CefV8Handler {
//     public:
//       bool Execute(const CefString& name,
//                    CefRefPtr<CefV8Value> object,
//                    const CefV8ValueList& arguments,
//                    CefRefPtr<CefV8Value>& retval,
//                    CefString& exception) override {
//         if (name == "cefTposeButtonClicked") {
//           std::cout << "[CEF] T-Pose 버튼 클릭 감지!" << std::endl;
//           // 여기에 C++ 로직 추가 (예: 메시지 송신, 파일 기록 등)
//           return true;
//         }
//         return false;
//       }
    
//       IMPLEMENT_REFCOUNTING(TposeHandler);
//     };
    
//     // JavaScript context 생성 시점에 바인딩
//     void OnContextCreated(CefRefPtr<CefBrowser> browser,
//                           CefRefPtr<CefFrame> frame,
//                           CefRefPtr<CefV8Context> context) {
//       context->Enter();
    
//       CefRefPtr<CefV8Value> global = context->GetGlobal();
//       CefRefPtr<CefV8Value> func = CefV8Value::CreateFunction("cefTposeButtonClicked", new TposeHandler());
//       global->SetValue("cefTposeButtonClicked", func, V8_PROPERTY_ATTRIBUTE_NONE);
    
//       context->Exit();
//     }
    

//---------------------------------------



const Header = () => {
    return (
        <>
            <div className='header'>
            <div className='left-info'>
                <div className='left-info-area'>
                    <div className='wifi-logo' />
                    <div className='wifi-state'>1ms</div>
                </div>
                <div className='spacing' />
                <div className='left-info-area'>
                    <div className='tpose-logo' />
                    {/* <div className='wifi-state' onClick={onClickTposeBtn}>전체정렬</div> */}
                    <div className='wifi-state' onClick={onClickTposeBtn}>T-Pose</div>

                </div>
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