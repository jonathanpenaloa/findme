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
      {user ? (
        <>
          <img src={user.avatar} alt="img" />
          <h4>Hi! {user.name}</h4>
          <Link to="/findme/Book">Book</Link>
          <Link to="/findme/DashBoard">Home</Link>
          <Link to="/findme/About">About</Link>
          <LogoutButton />
        </>
      ) : (
        <>
          <img src="https://cdn-icons-png.flaticon.com/512/1802/1802342.png" alt="img" />
          <h4>Looking for a haircut?</h4>
          <Link to="/findme/Book">Book</Link>
          <Link to="/findme/About">About</Link>
          <Link to="/findme/">Log In</Link>
        </>
      )}
    </div>
  )
}

export default NavBar