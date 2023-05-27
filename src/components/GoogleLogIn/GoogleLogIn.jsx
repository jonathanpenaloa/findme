import React from 'react'
import { GoogleLogin } from 'react-google-login'
// import dotenv  from "react-dotenv";
// dotenv.config();
// dotenv({path: '.env'})


function GoogleLogIn() {

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user:", res.profileObj);
    }
    const onFailure = (res) => {
        console.log("Sign in Failure", res);
    }

   
  return (
    <div id="signInButton">
        <GoogleLogin
            sandbox="allow-same-origin"
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText='Login'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
        />
    </div>
  )
}

export default GoogleLogIn