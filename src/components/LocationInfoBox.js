// import React from 'react'

const LocationInfoBox = ({info}) => {
   return (
      <div className="location-info">
            <h2>Location info:</h2>
            <ul>
               <li> ID: <span> {info.id} </span></li>
               <li> TITLE:  <span>{info.title} </span></li>
            </ul>
      </div>
   )
}

export default LocationInfoBox
