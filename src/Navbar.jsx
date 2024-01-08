import React from 'react'
import { Link  } from 'react-router-dom'
import pdf from './Arpit-Jain-Resume.pdf'
import "./Navbar.css"

const Navbar = ({themeObj}) => {
  let {theme,setTheme}=themeObj
  let changeTheme=()=>{
    if(theme=="dark"){
      setTheme("light");
    }
    else{
      setTheme("dark");
    }
  }
  let light = "navbar navbar-expand-lg  bg-body-tertiary  ";
  let dark = "navbar navbar-expand-lg  navbar-dark bg-dark dark ";
  return (
    <div>
      <nav className={theme=="dark"?dark:light}>
      
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Arpit Jain</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        {/* <Link className="nav-link active" aria-current="page" to="#">Home</Link> */}
        <a className="nav-link" target='_blank' href={pdf}>Resume</a>
        <Link className="nav-link" to="/project">Project</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        <Link className="nav-link" to="/about">About</Link>
        {/* <input type="checkbox"  data-toggle="toggle" data-size="lg"/> */}

       
        {/* <Link className="nav-link disabled" aria-disabled="true">Disabled</Link> */}
      </div>
    </div>
    <div className="form-check form-switch">
            <input style={{ width: "50px", height: "30px" }} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"  onClick={changeTheme}  />
            {/* <input style={{ width: "50px", height: "30px" }} className={"form-check-input"} type="checkbox" role="switch" id="flexSwitchCheckChecked" /> */}
          </div>
  </div>
  
</nav>
    </div>
  )
}

export default Navbar
