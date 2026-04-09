import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Hero from "./Pages/Hero.tsx";
createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<App/>}></Route>

      <Route path='/Home' element={<Hero/>}></Route>
    </Routes>
    

    </BrowserRouter>

  </StrictMode>,
)
