import React, { useContext } from 'react'
import { PrimaryContext } from '../contexts/PrimaryContext'

function QuickBook({selectedProvider}) {

  const { user, userApps, setUserApps } = useContext(PrimaryContext)

  const pickTheTime = (e) => {
    let newUserApps = [...userApps, { id: selectedProvider.id, time: e.target.innerText }]
    setUserApps(newUserApps)
    // console.log("Im adding appontments hopefully ", userApps)
    localStorage.setItem(user.id, JSON.stringify(newUserApps))
  }

  // const [leftTimes, setLeftTimes] = useState([])

  // avaible - lefTime = state
  // filter availableTimeSlots (boolean => .some loop through userAps (check all useraps that have the barber's ID AND match the time))

  // youHaveTheseTimesToChooseFrom = selectedProvider.availableTimeSlots.filter((timeSlots) => {
  //   // 
  // })

  let apps = selectedProvider.availableTimeSlots.map((timeBlock, idx) => {
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