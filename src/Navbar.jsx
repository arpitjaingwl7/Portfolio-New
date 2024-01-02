import React from 'react'
import { Link  } from 'react-router-dom'
import pdf from './Arpit-Jain-Resume.pdf'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
        {/* <Link className="nav-link disabled" aria-disabled="true">Disabled</Link> */}
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
