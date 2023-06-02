import React, { useContext, useState } from 'react'
import { PrimaryContext } from '../contexts/PrimaryContext'
import "./QuickBook.css"

function QuickBook({selectedProvider}) {

  const { user, userApps, setUserApps } = useContext(PrimaryContext)

  const pickTheTime = (e) => {
    let newUserApps = [...userApps, { id: selectedProvider.id, time: e.target.innerText }]
    setUserApps(newUserApps)
    localStorage.setItem(user.id, JSON.stringify(newUserApps))
  }

  const [leftTimes, setLeftTimes] = useState([])

  let youHaveTheseTimesToChooseFrom = selectedProvider.availableTimeSlots.filter((timeSlot) => {

   return !userApps.some((apt) => {
    let bolean = selectedProvider.id === apt.id && timeSlot.time === apt.time
    return bolean;
    })


  })

  let apps = youHaveTheseTimesToChooseFrom.map((timeBlock, idx) => {
    return (
      <button 
        onClick={pickTheTime}
        className={timeBlock.available ? "available" : "take-event-away"} 
        key={idx}
      >
        {timeBlock.time}
      </button>
      );
  })


  

  return (
    <div id='quick-book'>
      <div className="selected-barber-el">
        {selectedProvider.name}
      </div>
      <div className="appointment-window">
        {apps}
      </div>
    </div>
  )
}

export default QuickBook