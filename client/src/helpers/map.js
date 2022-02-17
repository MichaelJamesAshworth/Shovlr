const { Autocomplete } = require("@react-google-maps/api");

const libraries = ["places"];
const mapContainerStyle = {
  height: '50vh',
  marginLeft: '1.5em',
  marginRight: '1.5em',
  marginTop: '1em',
  marginBottom: '1em',
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

module.exports = {
  libraries,
  mapContainerStyle,
  center,
  options
}