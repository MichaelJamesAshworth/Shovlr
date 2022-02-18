const { Autocomplete } = require("@react-google-maps/api");

const libraries = ["places"];

const mapContainerStyle = {
  height: '50vh',
  marginLeft: '1em',
  marginRight: '1em',
  marginTop: '1em',
  marginBottom: '1em',
  borderRadius: '5px'
};

const center = {
  lat:  45.424721,
  lng: -75.695000
};

const options = {
  // styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  tilt: 0,
  mapTypeId: 'hybrid'
};

//Function to fetch city via reverse geocode
function reverseGeocode(lat, long, setLocation) {
  const geocode = new window.google.maps.Geocoder();
  const latlng = {
    lat: parseFloat(lat),
    lng: parseFloat(long),
  };
  console.log(lat, long);
  geocode
    .geocode({ location: latlng })
    .then((response) => {
      console.log(response);
      
      if (response.results[0]) {
        const length = response.results.length;
        const city = response.results[length - 4].formatted_address;
        const address = response.results[0].formatted_address;
        console.log(city);

        setLocation({
          lat,
          lng: long,
          city,
          address 
        });
      }
    })
    .catch((e) => window.alert("Geocoder failed due to: " + e));
}

module.exports = {
  libraries,
  mapContainerStyle,
  center,
  options,
  reverseGeocode
}