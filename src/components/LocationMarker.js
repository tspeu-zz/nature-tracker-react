// import React from 'react'
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';


const LocationMarker = ({lat, lng, onClick, icon}) => {
   return (
      <div className="location-marker"
         onClick={onClick}>
         <Icon icon={icon} className="location-icon" />
      </div>
   )
}

LocationMarker.defaultProps = {
   icon: locationIcon   
}

export default LocationMarker
