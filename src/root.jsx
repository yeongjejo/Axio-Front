import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingPage from './page/LoadingPage.jsx'
import MainPage from './page/MainPage.jsx'
import ConnectionPage from './page/ConnectionPage.jsx'
import GraphPage from './page/GraphPage.jsx'
import HapticPage from './page/HapticPage.jsx'
import BodyPage from './page/BodyPage.jsx'
import SettingPage from './page/SettingPage.jsx'

createRoot(document.getElementById('root')).render(
  // todo StrictMode 베포시 삭제 (또는 그전에 삭제 [한번])
  // <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoadingPage />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/connection' element={<ConnectionPage />} />
        <Route path='/graph' element={<GraphPage />} />
        <Route path='/haptic' element={<HapticPage />} />
        <Route path='/body' element={<BodyPage />} />
        <Route path='/setting' element={<SettingPage />} />
      </Routes>
    
    </BrowserRouter>
  // </StrictMode>,
)
