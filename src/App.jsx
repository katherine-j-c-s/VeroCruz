import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Nav } from './components/Nav/Nav'
import { Home } from './components/Home/Home'
import { AboutUs } from "./components/AboutUs"
import { Cursos } from "./components/Cursos"
import { Blog } from "./components/Blog"
import { Voucher } from './components/Voucher'
import './App.css'

function App() {

  return (
    <>
      <Nav></Nav> 
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/Cursos' element={ <Cursos/> }></Route>
        <Route path='/About' element={ <AboutUs/> }></Route>
        <Route path='/Voucher' element={ <Voucher/> }></Route>
        <Route path='/Blog' element={ <Blog/> }></Route>
      </Routes>
     
    </>
  )
}

export default App
