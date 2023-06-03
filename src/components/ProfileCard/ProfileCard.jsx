import React from "react"
import "./ProfileCard.css"

const ProfileCard = ( { name, selectBarber, description, url, barber } ) => {
    return (
        <div className="card">
          <div>
        <img
          className="card-image"
          src={url}
          alt="profile-image"
          />
          </div>
        <div className="card-content">
          <div className="card-title">{name}</div>
          <div className="card-text">{description}</div>
          <button onClick={() => selectBarber(barber)} className="card-button">Book an Appoinment</button>
        </div>
      </div>
    )
}

export default ProfileCard