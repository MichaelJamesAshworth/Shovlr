import React, { useState } from 'react';

// -------MAP STUFF------- //
// import Locate from './components/Locate';
import Search from '../components/Search';

import {
  libraries, 
  mapContainerStyle, 
  center, 
  options
} from '../helpers/map';

import { 
  GoogleMap,
  useLoadScript,
  Marker
} from "@react-google-maps/api";
// -------MAP STUFF------- //

const Home = () => {

  // -------MAP STUFF------- //  
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  const [markers, setMarkers] = useState([]);
  const [location, setLocation] = useState();

  const onMapClick = React.useCallback((event) => {
    setLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
    // setMarkers(() => [, {
    //   lat: event.latLng.lat(),
    //   lng: event.latLng.lng(),
    //   time: new Date()
    // }])
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
  // console.log(location)
  // -------MAP STUFF------- //

  return (
    <div>
      <Search panTo={panTo} locationSelector={(location) => {
        setLocation(location)
        setMarkers([{...location, time: new Date()}])
        }} />

      <GoogleMap
        mapContainerStyle={mapContainerStyle} 
        zoom={9}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {location && [location].map(marker => <Marker
          key={new Date().toISOString()} 
          position={{ lat: marker.lat, lng: marker.lng }}
          icon={{
            url: '/snowflake.svg',
            scaledSize: new window.google.maps.Size(40, 40),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(20, 20)
          }}
        />)}
      </GoogleMap>
    </div>
  );
}

export default Home

  // RETURN HERE

