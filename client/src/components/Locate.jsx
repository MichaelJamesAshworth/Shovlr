  const Locate = ({panTo}) => {
  return <button className='locate' onClick={() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
      panTo({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    }, () => null);
  }}>
    Get current location
  </button>
}

export default Locate;