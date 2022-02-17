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

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: process.env.REACT_APP_OPENWEATHER_API_KEY,
    lat: location.lat,
    lon: location.lng,
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      //Note: the label here needs to be dynamic to match lat, lng
      locationLabel="St. John's"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};

export default WeatherBox