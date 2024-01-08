import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home' 
import Home1 from './Home1'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

import { Route, Routes } from 'react-router-dom'
// import Home1 from './Home1'



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




  let [theme,setTheme]=useState("light");


  return (
    <>
      <>

      
         <Navbar themeObj={{theme,setTheme}}>  </Navbar>
      <Routes>
      <Route path='/' element={<Home  theme={theme}></Home>}></Route>
      <Route path='/about' element={<About theme={theme}></About>}></Route>
      <Route path='/project' element={<Projects theme={theme}></Projects>}></Route>
      <Route path='/contact' element={<Contact theme={theme}></Contact>}></Route>


      </Routes>

      
      </>
     
    </>
  )
}

export default App
