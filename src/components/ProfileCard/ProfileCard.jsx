import React from "react"
import "./ProfileCard.css"

const ProfileCard = ( { name, selectBarber, description, url, barber } ) => {
    return (
        <div className="card">
        <img
          className="card-image"
          src={url}
          alt="profile-image"
        />
        <div className="card-content">
          <div className="card-title">{name}</div>
          <div className="card-text">{description}</div>
          <button onClick={() => selectBarber(barber)} className="card-button">see my appointments</button>
        </div>
      </div>
    )
}

export default ProfileCard