import './App.css';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import LoginButton from "./components/GoogleLogIn/GoogleLogIn"
import LogoutButton from "./components/GoogleLogout/GoogleLogout"

function App() {

   
  useEffect(() => {
    let clientId = ""
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load("client:auth2", start);
  }, []);


  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
    </div>
  )
}

export default App;
