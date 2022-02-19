import React, { useContext, useState } from 'react';
import Search from '../components/Search';
import { locationContext } from '../providers/LocationProvider';

import {
  libraries, 
  mapContainerStyle, 
  center, 
  options,
  reverseGeocode
} from '../helpers/map';

import { 
  GoogleMap,
  useLoadScript,
  Marker
} from "@react-google-maps/api";

const Map = () => {
  //location context
  const { location, setLocation } = useContext(locationContext);
  console.log("Location--->:", location);

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  const [markers, setMarkers] = useState([]);

  const onMapClick = React.useCallback((event) => {
    
    reverseGeocode(event.latLng.lat(), event.latLng.lng(), setLocation)
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
  console.log("After code has been run:", location);

  return (
    <div>
      <Search panTo={panTo} locationSelector={(location) => {
        reverseGeocode(location.lat, location.lng, setLocation);
        }} />

      <GoogleMap
        mapContainerStyle={mapContainerStyle} 
        zoom={12}
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

export default Map;