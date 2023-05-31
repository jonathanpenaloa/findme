import React, { useContext } from 'react'
import "./UserSchedule.css"
import { PrimaryContext } from '../contexts/PrimaryContext';

const UserSchedule = ({userApps}) => {

  const {selectedProvider } = useContext(PrimaryContext)


  let myappoinments = userApps.map((apt, idx) => {
    if(selectedProvider.id === apt.id) {
      return <div key={JSON.stringify(apt) + idx}>{apt.time}<button>X</button></div>
    }
  });

  return (
    <div id='user-schedule'>
      <h1>Your appointment times:</h1>
      {/* {userApps} */}
      {myappoinments}
    </div>
  )
}

export default UserSchedule