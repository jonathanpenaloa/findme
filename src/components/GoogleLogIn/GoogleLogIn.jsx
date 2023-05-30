import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { useNavigate } from "react-router-dom";
import { PrimaryContext } from '../contexts/PrimaryContext';
import { useContext } from 'react';

function GoogleLogIn() {

    // const [user, setUser] = useState({
    //     id: "",
    //     name: "",
    //     img: "",
    //     email: ""
    // });

    const { setUser } = useContext(PrimaryContext)

    const navigate = useNavigate()

    const onSuccess = (res) => {
        let gd = res.profileObj
        setUser({
            id: gd.googleId ,
            name: gd.name,
            img: gd.imageUrl,
            email: gd.email
         })
        // check localstore for prev apts
        // "as;dlfkj;lqwjer": [{}, {}, {}]
        // "as;dlfkj;lqwjer": [{}, {}, {}]
        // "as;dlfkj;lqwjer": [{}, {}, {}]
        // "as;dlfkj;lqwjer": [{}, {}, {}]
        // "as;dlfkj;lqwjer": [{}, {}, {}]
        // "as;dlfkj;lqwjer": [{}, {}, {}]
        // if yes,  setUserApts(found array)
        // if no, do nothing
        navigate("/DashBoard")
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