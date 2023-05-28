import React from 'react'
import "./LogIn.css"
import GoogleLogIn from '../../components/GoogleLogIn/GoogleLogIn'

const LogIn = () => {
  return (
    <div id="form-section">
      <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/35877/calendar-icon-clipart-md.png" alt="img" />
        <form action="submit">
          <input type="text" name='name' placeholder='name' required />
          <input type="text" name='email' placeholder='email' required />
          <button>Login</button>
        <GoogleLogIn />
        </form>
    </div>
  )
}

export default LogIn