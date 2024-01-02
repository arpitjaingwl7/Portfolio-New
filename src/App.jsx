import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

import { Route, Routes } from 'react-router-dom'



/*
Portfolio

    - HOME
        - Navbar
        - Photo
        - Name
        - AIM LINE

    - CONTACT
        - Navbar
        - 
    - PROJECTS
    - ABOUT US
    - RESUME

*/


function App() {
 

  return (
    <>
      <>

      
         <Navbar>  </Navbar>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/project' element={<Projects></Projects>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>


      </Routes>

      
      </>
     
    </>
  )
}

export default App
