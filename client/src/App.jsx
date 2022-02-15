import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import CheckoutForm from './components/CheckoutForm';
import React, { useState } from 'react';

// Google map react api
import { 
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";

// map styling
import mapStyles from './mapStyles';

//Stripe related imports
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51KPUvgLzGdhWWQN43gX8AKiDzqiAUPab5CLLzJQ3VmggDKuBbmmA6aknytp7B8zOAolhN4vfZMLpAaRJ8Jva2EQu00CMiUU59f');

// Maps api variables
const libraries = ["places"];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
};
const center = {
  lat:  45.424721,
  lng: -75.695000
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
};

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
function App() {
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

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps"; 

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
              url: '/shovel.svg',
              scaledSize: new window.google.maps.Size(30,30),

            }}
          />)}
        </GoogleMap>
      <button onClick={onSubmit}>Submit</button>
    </>
  );
};

export default App;
