// import React from 'react'
import GoogleMapReact from 'google-map-react';
// import env from '../../.env.local';
import LocationMarker from './LocationMarker';

//     const _URL = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

const Map = ({eventData, center, zoom}) => {
   // const env = `${process.env.API_KEY_MAP}`;
   // console.log(env);
   console.log('from maps->', eventData);

   const markers = eventData.map( ev => {
      console.log('from event', ev);
      // check for fires
      if(ev.categories[0].id === 8) {
         return  <LocationMarker 
                  lat={ev.geometries[0].coordinates[1]} 
                  lng={ev.geometries[0].coordinates[0]} />
      }

      return null;
      
   });

// id 10 severe storms
// id 8fire
// id": 15,"title": "Sea and Lake Ice"
// "id": 12,"title": "Volcanoes"
// "id": 8,"title": "Wildfires"
   return (
      
      <div className="map">
         <GoogleMapReact 
            bootstrapURLKeys={{key:'AIzaSyDZhTtxnn1rmZMTfJzCKO96NFbS_2fIUwM'}}
            defaultCenter={center}
            defaultZoom={zoom}>
{/*  llop from daata */}
            {markers}
         </GoogleMapReact>
      </div>
   )
}

Map.defaultProps = {
   center: {lat: 42.3265,
            lng: -122.8756},
   zoom: 6      
}

export default Map
