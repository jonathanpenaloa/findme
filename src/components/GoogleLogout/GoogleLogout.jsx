import React from 'react'
import { GoogleLogout } from 'react-google-login'    
import { useNavigate as Navigate } from 'react-router-dom'

function googleLogout() {
  
  const navigate = Navigate()
  const logoutSuccess = () => {
    navigate('/login');
  }
  
  const logoutFailure = (res) => {
    console.log(res)
  }
  
  
  return (
    <div id="signOutButton">
    <GoogleLogout 
      sandbox="allow-same-origin"
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText='Logout'
      onLogoutSuccess={logoutSuccess}
      onFailure={logoutFailure}
     />
  </div>
  );
}

export default googleLogout