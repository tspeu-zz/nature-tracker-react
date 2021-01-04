// import React from 'react'
import {useState} from 'react';
import GoogleMapReact from 'google-map-react';
// import env from '../../.env.local';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
// npm install --save-dev @iconify/react @iconify-icons/ion
import thunderstormSharp from '@iconify-icons/ion/thunderstorm-sharp';
import volcanoIcon from '@iconify-icons/wi/volcano';
import icebergIcon from '@iconify-icons/openmoji/iceberg';



//     const _URL = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

const Map = ({eventData, center, zoom}) => {
   // const env = `${process.env.API_KEY_MAP}`;
   // console.log(env);
   // console.log('from maps->', eventData);
   // on click envent
   const [locationInfo, setLocationInfo]  = useState(null);

   const markers = eventData.map( (ev, i) => {
      // console.log('from event', ev);
      // check for fires
      if(ev.categories[0].id === 8) {
         return  <LocationMarker
                  key={i} 
                  lat={ev.geometries[0].coordinates[1]} 
                  lng={ev.geometries[0].coordinates[0]} 
                  onClick={() => setLocationInfo({id: ev.id, title: ev.title}) }/>
      }

      if(ev.categories[0].id === 10) {

         // console.log('*******************--------------------');
         // console.log('geometries',ev.geometries[0]);
         // console.log('*******************--------------------');
         // const  geo = ev.geometries.map( (geo, i) => {
         //    console.log('geo', geo);
         //    console.log('i',i);
         //    console.log('geo.coordinates[1]',geo.coordinates[1]);
         //    console.log('geo.coordinates[0]',geo.coordinates[0]);
         //    console.log('--------------------');
         //    console.log('--------------------');
         //    <LocationMarker 
         //       key={i}
         //       lat={geo.coordinates[1]} 
         //       lng={geo.coordinates[0]} 
         //       onClick={() => setLocationInfo({id: ev.id, title: ev.title})}
         //       icon = {thunderstormSharp} />
         // // });
         // return geo
         return   <LocationMarker 
                     key={i} 
                     lat={ev.geometries[0].coordinates[1]} 
                     lng={ev.geometries[0].coordinates[0]} 
                     onClick={() => setLocationInfo({id: ev.id, title: ev.title})}
                     color={'blue'}
                     icon = {thunderstormSharp} />
            // });
      }

      if(ev.categories[0].id === 15) {
         // console.log('*******************--------------------');
         // console.log('volcanoes',ev.geometries[0]);
         const icebergs = ev.geometries[0];
         const lat = icebergs.coordinates[1];
         const lon = icebergs.coordinates[0];
         // console.log('icebergses',icebergs);
         // console.log('*******************--------------------');
         return  <LocationMarker 
                  key={i} 
                  lat={lat} 
                  lng={lon} 
                  onClick={() => setLocationInfo({id: ev.id, title: ev.title})}
                  color={'white'}
                  icon = {icebergIcon} />
      }

      if(ev.categories[0].id === 12) {
         // console.log('*******************--------------------');
         // console.log('*******************', ev.geometries[0]);
         const volcano = ev.geometries[0] ? ev.geometries[0] : null;
         // console.log('volcanoes',volcano);
         // console.log('volcanoes',volcano.coordinates.length);
         const volcanoLon = volcano.coordinates.length < 2 ? 127.84286499023438 : volcano.coordinates[0];
         const volcanoLat = volcano.coordinates[1] ? volcano.coordinates[1] : 1.6633016286241373 ;
         // console.log('volcanoes volcanoLon',volcanoLon);
         // console.log('volcanoes volcanoLat',volcanoLat);
         // console.log('volcanoes',volcano);
         return  <LocationMarker 
                     key={i}
                     lat={volcanoLat} 
                     lng={volcanoLon} 
                     onClick={() => setLocationInfo({id: ev.id, title: ev.title})}
                     color={'yellow'}
                     icon = {volcanoIcon} />
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
         {locationInfo && <LocationInfoBox info={locationInfo}/>}
      </div>
   )
}

Map.defaultProps = {
   center: {lat: 42.3265,
            lng: -122.8756},
   zoom: 5      
}

export default Map
