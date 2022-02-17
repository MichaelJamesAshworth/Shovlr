import axios from 'axios';
const {createContext, useState} = require("react");


export const locationContext = createContext();

export default function LocationProvider (props) {


  //location state lat, lng
  const [location, setLocation] = useState({
    lat: 0.00000,
    lng: 0.00000
  });

  //set location state based on user address
  const getInitialLocation = function() {
    const URL = 'http://localhost:3001/api/addresses/1'
    axios.get(URL)
      .then((response) => {
        setLocation({lat: response.data[0].lat, lng: response.data[0].lng})
      })
  }

  const locationData = {location, setLocation, getInitialLocation};

  return (
    <locationContext.Provider value={locationData}>
      {props.children}
    </locationContext.Provider>
  );
}