import React from "react"
import "./BarberBio.css"

const BarberBio = ( { selectedProvider } ) => {
    return (
        <div className="barber-card-bio">
          <img
            className="card-image"
            src={selectedProvider.img_url}
            alt="profile-image"
          />
          <div className="card-text">{selectedProvider.description}</div>
          <div>{selectedProvider.bio.about}</div>
          <p>{selectedProvider.bio.story}</p>
      </div>
    )
}

export default BarberBio