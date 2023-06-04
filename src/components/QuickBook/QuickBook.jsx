import React, { useContext } from 'react'
import { PrimaryContext } from '../contexts/PrimaryContext'
import "./QuickBook.css"
import BarberBio from '../BarberBio/BarberBio'

function QuickBook({selectedProvider}) {

  const { user, userApps, setUserApps } = useContext(PrimaryContext)

  const pickTheTime = (e) => {
    let newUserApps = [...userApps, { id: selectedProvider.id, time: e.target.innerText }]
    setUserApps(newUserApps)
    localStorage.setItem(user.id, JSON.stringify(newUserApps))
  }

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
        <BarberBio selectedProvider={selectedProvider}/>
      </div>
      <div className="appointment-window">
        available appointments:
        {apps}
      </div>
    </div>
  )
}

export default QuickBook