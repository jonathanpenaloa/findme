import React from 'react'
import "./LogInPage.css"
import GoogleLogIn from '../../components/GoogleLogIn/GoogleLogIn'

const LogInPage = () => {
  return (
    <div id="form-section">
      <div>
        <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/35877/calendar-icon-clipart-md.png" alt="img" />
        <h1>Welcome to FindMe!</h1>
      </div>
      <div id="right-section">
        <form action="submit">
          <input 
          type="text" 
          name='name' 
          placeholder='name' 
          required 
          />
          <input 
          type="text" 
          name='email' 
          placeholder='email' 
          required 
          />
          <button>Login</button>
        </form>
        <GoogleLogIn />
      </div>
    </div>
  )
}

export default LogInPage