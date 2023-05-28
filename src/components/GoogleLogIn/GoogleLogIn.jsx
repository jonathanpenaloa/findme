import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { useNavigate } from "react-router-dom";


function GoogleLogIn() {

    const navigate = useNavigate()

    const onSuccess = (res) => {
        navigate("/")
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