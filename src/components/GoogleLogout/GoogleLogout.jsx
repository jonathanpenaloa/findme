import React from 'react'
import { GoogleLogout } from 'react-google-login'
// import  dotenv   from "react-dotenv";
// dotenv({path: '.env'})

function googleLogout() {

    const onSuccess = () => {
        console.log("Log out successfull!")
    }

    let clientId = ""
  return (
    <div id="signOutButton">
    <GoogleLogout 
      sandbox="allow-same-origin"
      clientId={clientId}
      buttonText='Logout'
      onSuccess={onSuccess}
     />
  </div>
  );
}

export default googleLogout