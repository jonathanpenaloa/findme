import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { PrimaryContext } from '../contexts/PrimaryContext'
import LogoutButton from "../GoogleLogout/GoogleLogout";

function NavBar() {

  const { user } = useContext(PrimaryContext)


  return (
    <div className='nav-bar'>
      {user.name !== "" ? (
        <>
          <img src={user.avatar} alt="img" />
          <p>Hi! {user.name}</p>
          <Link to="/Book">Book</Link>
            <div >
              <Link to="/DashBoard">Home</Link>
              <Link to="/About">About</Link>
            </div>
          <LogoutButton />
        </>
      ) : (
        <>
          <img src="https://cdn-icons-png.flaticon.com/512/1802/1802342.png" alt="img" />
          <p>Looking for a haircut?</p>
          <Link to="/Book">Book</Link>
          <div>
            <Link to="/About">About</Link>
            <Link to="/Login">Log In</Link>
          </div>
        </>
      )}
    </div>
  )
}

export default NavBar