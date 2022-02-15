// Dependencies
//
// reach/combobox
// react-google-maps/api
// use-places-autocomplete

// images in public

// locate and search components

// map helper (this file)

const libraries = ["places"];
const mapContainerStyle = {
  width: '100vw',
  height: '50vh'
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