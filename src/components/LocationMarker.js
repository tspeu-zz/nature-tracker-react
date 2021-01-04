// import React from 'react'
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';


const LocationMarker = ({lat, lng, onClick, icon, color}) => {
   const colores = color;
   // console.log('-->', colores);
   return (
      <div className="location-marker"
         onClick={onClick}>
         <Icon icon={icon} className="location-icon" style= {{color:colores}} />
      </div>
   )
}

LocationMarker.defaultProps = {
   icon: locationIcon,
   color: 'red'
}

// const userStyle = {
//    color: colores
// };

export default LocationMarker
