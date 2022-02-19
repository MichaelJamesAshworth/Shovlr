import axios from 'axios';
import { reverseGeocode } from '../helpers/map';
const {createContext, useState} = require("react");


export const locationContext = createContext();

export default function LocationProvider (props) {


  //location state lat, lng
  const [location, setLocation] = useState({
    lat: 0.00000,
    lng: 0.00000,
    city: "St. John's"
  });

  //set location state based on user address
  const getInitialLocation = function() {
    const URL = 'http://localhost:3001/api/addresses/1'
    axios.get(URL)
      .then((response) => {
        const formattedCity =response.data[0].title.split(",")[1];
        setLocation({lat: response.data[0].lat, lng: response.data[0].lng, city: formattedCity});
      })
  }

  const locationData = {location, setLocation, getInitialLocation};

  return (
    <locationContext.Provider value={locationData}>
      {props.children}
    </locationContext.Provider>
  );
}