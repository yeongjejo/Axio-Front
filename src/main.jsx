import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingPage from './page/LoadingPage.jsx'
import MainPage from './page/MainPage.jsx'
import '/src/css/App.css'

createRoot(document.getElementById('root')).render(
  // todo StrictMode 베포시 삭제 (또는 그전에 삭제 [한번 알아보고])
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoadingPage />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>
    
    </BrowserRouter>
  </StrictMode>,
)
