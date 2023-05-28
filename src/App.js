import './App.css';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import LoginButton from "./components/GoogleLogIn/GoogleLogIn"
import LogoutButton from "./components/GoogleLogout/GoogleLogout"
import NavBar from './components/NavBar/NavBar';
import DashBoard from './pages/DashDoard/DashBoard';
import About from "./pages/About/About.jsx"
import { Routes, Route } from "react-router-dom"; 
import LogInPage from './pages/LogInPage/LogInPage';

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
      <LogoutButton />
      <NavBar/>
        <Routes>
          <Route path='/' element={<DashBoard/> }/>
          <Route path='/Book' />
          <Route path='/About' element={<About />}/>
          <Route path='/Login' element={<LogInPage/>}/>
        </Routes>
    </div>
  )
}

export default App;
