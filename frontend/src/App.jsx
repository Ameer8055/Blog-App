import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'
import Addblog from './components/Addblog'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Privateroutes from './components/Privateroutes'

function App() {
   return (
    <>
    
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route element={<Privateroutes/>}>
      <Route path='/blogs' element={<Main child={<Home/>}/>}></Route>
      <Route path='/addblogs' element={<Main child={<Addblog/>}/>}></Route>
      </Route>
      
    </Routes>
    </>
  )
}

export default App
