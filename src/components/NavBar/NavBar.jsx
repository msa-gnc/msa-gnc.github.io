import React from 'react'
import "./navBar.css"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='container'>

      <div className='logoContainer'>
    
      <NavLink
       to="/"
    className="navLink"
       >
        msg-gnc
      </NavLink>

      </div>
      
      <div className='paths'>

      <NavLink
       to="/"
    className="navLink"
       >
        Home
      </NavLink>


      <NavLink
       to="/counter"
    className="navLink"
       >
      Counter
      </NavLink>


      <NavLink 
      to="/contact"
        className="navLink"

      >
      Contact
      </NavLink>
      
      
      </div>
    </div>
  )
}

export default NavBar