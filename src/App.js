import './App.css';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import LoginButton from "./components/GoogleLogIn/GoogleLogIn"
import LogoutButton from "./components/GoogleLogout/GoogleLogout"
import DashBoard from './pages/DashDoard/DashBoard';
import NavBar from './components/NavBar/NavBar';

function App() {
   
  useEffect(() => {
    let clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID
    const start = () => {
      gapi.client.init({
        client_Id: clientId,
        scope: ""
      })
    };
    gapi.load("client:auth2", start);
  }, []);


  return (
    <div className="App">
      {/* <LoginButton /> */}
      {/* <LogoutButton /> */}
      <NavBar/>
      <DashBoard />
    </div>
  )
}

export default App;
