import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingPage from './page/LoadingPage.jsx'
import MainPage from './page/MainPage.jsx'
import '/src/css/App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoadingPage />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>
    
    </BrowserRouter>
  </StrictMode>,
)
