import './App.css';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import NavBar from './components/NavBar/NavBar';
import DashBoard from './pages/DashDoard/DashBoard';
import About from "./pages/About/About.jsx"
import { Routes, Route, Navigate } from "react-router-dom"; 
import LogInPage from './pages/LogInPage/LogInPage';
import Book from './pages/Book/Book';
import LoggedInRoute from './pages/LoggedInRoute/LoggedInRoute';

function App() {

  console.log(localStorage)
   
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
      <NavBar/>
        <Routes>
          <Route path='/' element={<LogInPage/>}/>
          <Route path='/DashBoard' element={<LoggedInRoute Component={DashBoard}/>}/>
          <Route path='/Book'  element={<LoggedInRoute Component={Book}/>}/>
          <Route path='/About'  element={<About/>}/>
          <Route path='/*'  element={<Navigate to="/"/>}/>
        </Routes>
    </div>
  )
}

export default App;
