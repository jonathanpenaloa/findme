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
        <div
        key={JSON.stringify(apt) + idx}
        >
          <div  id='time-of-appointments'>
          {apt.time}
            <button 
            onClick={() => removeAppointment(apt.time)}> cancel
            </button>
          </div>
        </div>
      )
    }
  });

  return (
    <div id='user-schedule'>
      <div className='user-app-calendar-times'>
      <div>Your appointment :</div>
        {myappoinments}
      </div>
    </div>
  )
}

export default UserSchedule