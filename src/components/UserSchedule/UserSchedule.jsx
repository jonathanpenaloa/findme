import React, { useContext } from 'react'
import "./UserSchedule.css"
import { PrimaryContext } from '../contexts/PrimaryContext';

const UserSchedule = ({userApps, setUserApps}) => {

  const { selectedProvider, user} = useContext(PrimaryContext)

  const removeAppointment = (ApptTime) => {

    let updatedUserApps = userApps.filter((apt) => {
      return apt.time !== ApptTime
    })

    setUserApps(updatedUserApps)
    localStorage.setItem(user.id, JSON.stringify(updatedUserApps))
  }

  let myappoinments = userApps.map((apt, idx) => {

    if(selectedProvider.id === apt.id) {
      return (
        <div key={JSON.stringify(apt) + idx}>
          {apt.time}
          <button 
          onClick={() => removeAppointment(apt.time)}
          >cancel</button>
        </div>
      )
    }
  });

  return (
    <div id='user-schedule'>
      <h1>Your appointment times:</h1>
      {myappoinments}
    </div>
  )
}

export default UserSchedule