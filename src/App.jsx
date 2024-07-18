import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Nav } from './components/Nav/Nav'
import { Footer } from './components/Footer/Footer'
import { Home } from './components/Home/Home'
import { AboutUs } from './components/AboutUs/AboutUs'
import Curso from './components/Cursos/Curso'
import Blog from './components/Blog/Blog'
import { Detalle } from './components/Blog/Detalle'
import { Voucher } from './components/Voucher'
import './App.css'

function App() {

  return (
    <>
      <Nav></Nav> 
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/Curso/:id' element={ <Curso/> }></Route>
        <Route path='/Nosotros' element={ <AboutUs/> }></Route>
        <Route path='/Voucher' element={ <Voucher/> }></Route>
        <Route path='/Blog' element={ <Blog/> }></Route>
        <Route path='/DetalleBlog/:id' element={ <Detalle/> }></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
