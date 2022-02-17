import ReactWeather, { useOpenWeather } from 'react-open-weather';
import { locationContext } from '../providers/LocationProvider';
import { useContext, useEffect } from 'react';

const WeatherBox = () => {

  //context
  const { location, getInitialLocation } = useContext(locationContext);

  //get location data for user
  useEffect(() => {
    getInitialLocation();
  },[]);

  const { data, isLoading, errorMessage, city } = useOpenWeather({
    key: process.env.REACT_APP_OPENWEATHER_API_KEY,
    lat: location.lat,
    lon: location.lng,
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  
  return (
    <ReactWeather
      isLoading={false}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      //Note: the label here needs to be dynamic to match lat, lng
      locationLabel={location.city}
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};

export default WeatherBox