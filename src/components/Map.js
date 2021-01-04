// import React from 'react'
import GoogleMapReact from 'google-map-react';
// import env from '../../.env.local';

//     const _URL = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

const Map = ({center, zoom}) => {
   // const env = `${process.env.API_KEY_MAP}`;
   // console.log(env);
   return (
      <div className="map">
         <GoogleMapReact 
            bootstrapURLKeys={{key:'AIzaSyDZhTtxnn1rmZMTfJzCKO96NFbS_2fIUwM'}}
            defaultCenter={center}
            defaultZoom={zoom}
            >

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
