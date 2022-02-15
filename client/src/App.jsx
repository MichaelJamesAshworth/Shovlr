import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import CheckoutForm from './components/CheckoutForm';

// -------MAP STUFF------- //
import React, { useState } from 'react';
import Locate from './components/Locate';
import Search from './components/Search';

import {
  libraries, 
  mapContainerStyle, 
  center, 
  options
} from './helpers/map';

import { 
  GoogleMap,
  useLoadScript,
  Marker
} from "@react-google-maps/api";
// -------MAP STUFF------- //

//Stripe related imports
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51KPUvgLzGdhWWQN43gX8AKiDzqiAUPab5CLLzJQ3VmggDKuBbmmA6aknytp7B8zOAolhN4vfZMLpAaRJ8Jva2EQu00CMiUU59f');

// function App() {
//   const options = {
//     // passing the client secret obtained from the server
//     clientSecret: 'sk_test_51KPUvgLzGdhWWQN40LPCYb3lWnlTTflSBTlfhGMu8ysaZgVC2Rz3wfx5Xnnyz5LfLd7wKFo2J9bgRoCpjRBitKpl00yZ37LpLi',
//   };

//   return (
//     <div>
//       <Elements stripe={stripePromise} options={options}>
//         <CheckoutForm />
//       </Elements>
//     </div> 
//   );
// };

//Sample to test that front-end and back-end is communicating properly:
export default function App() {

  // -------MAP STUFF------- //  
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  const [markers, setMarkers] = useState([]);

  const onMapClick = React.useCallback((event) => {
    setMarkers(current => [...current, {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      time: new Date()
    }])
  }, []);
  
  const mapRef = new React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  
  const panTo = React.useCallback(({lat, lng}) => {
    mapRef.current.panTo({lat, lng});
    mapRef.current.setZoom(18);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";
  // -------MAP STUFF------- //

  const onSubmit = () => {
    return axios.get("http://localhost:3001", )
    .then ((response) => {
      console.log(response.data);
    })
    .catch ((error) => {
      console.log(error);
    }) 
  }
  
  return (
    <>
      <h1 className="brand">Shovlr</h1>

      <Search panTo={panTo} />
      <Locate panTo={panTo} />

      <GoogleMap
        mapContainerStyle={mapContainerStyle} 
        zoom={9}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map(marker => <Marker 
          key={marker.time.toISOString()} 
          position={{ lat: marker.lat, lng: marker.lng }}
          icon={{
            url: '/snowflake.svg',
            scaledSize: new window.google.maps.Size(40, 40),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(20, 20)
          }}
        />)}
      </GoogleMap>
      <button onClick={onSubmit}>Submit</button>
    </>
  );
};