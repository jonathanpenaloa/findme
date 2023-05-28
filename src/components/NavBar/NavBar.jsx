import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='nav-bar'>
        <img src="https://lh3.googleusercontent.com/a/AAcHTtcTaGtGkAO1hw_hIhvaBsElgXCMUsdOsHn2RHTX=s96-c" alt="" />
        {/* Book link is going to be conditionaly render  */}
        <Link to="/Book">Book</Link>
        <div >
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Login">Login</Link>
        </div>
    </div>
  )
}

export default NavBar