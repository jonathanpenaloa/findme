import React, { useContext as UseContext } from 'react'
import { GoogleLogout } from 'react-google-login'    
import { useNavigate as Navigate } from 'react-router-dom'
import {PrimaryContext} from "../../components/contexts/PrimaryContext"

function googleLogout() {
  
  const { setUser } = UseContext(PrimaryContext)

 


  const navigate = Navigate()

  const logoutSuccess = () => {
    setUser({
      id: "",
      name: "",
      img: "",
      email: ""
    })
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