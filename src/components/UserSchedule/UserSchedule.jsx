import React, { useContext } from 'react'
import "./UserSchedule.css"
import { PrimaryContext } from '../contexts/PrimaryContext';

const UserSchedule = ({userApps}) => {

 /// selevted p
  const {selectedProvider } = useContext(PrimaryContext)
  // console.log(userApps);
  let myappoinments = userApps.map((apt, idx) => {
    return <div key={JSON.stringify(apt) + idx}>{apt.time}</div>
  });

  return (
    <div id='user-schedule'>
      {/* {userApps} */}
      {myappoinments}
    </div>
  )
}

export default UserSchedule