import { useState, useEffect} from 'react';
import Map from './components/Map';
import Loader from './components/Loader';
import Header from './components/Header';


// https://eonet.sci.gsfc.nasa.gov/api/v2.1/events
function App() {
  // state        setState
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  // function call data
  useEffect( () => {
    const _URL  = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events';
    console.log(_URL);
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(_URL);
      const {events}  = await res.json();
      console.log(events) 
      setEventData(events);
      setLoading(false);
    }
    fetchEvents();
    console.log(eventData) 
  },[]);

  return (
    <div className="App">
      <Header />

      { !loading ? <Map eventData={eventData}/> : <Loader/>}
      
    </div>
  );
}

export default App;
