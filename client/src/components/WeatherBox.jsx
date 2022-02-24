import ReactWeather, { useOpenWeather } from 'react-open-weather';
import { locationContext } from '../providers/LocationProvider';
import { useContext, useEffect } from 'react';

const WeatherBox = () => {

  const customStyles = {
    fontFamily:  'Helvetica, sans-serif',
    gradientStart:  '#58ab98',
    gradientMid:  '#2b6777',
    gradientEnd:  '#2b6777',
    locationFontColor:  '#FFF',
    todayTempFontColor:  '#FFF',
    todayDateFontColor:  '#ffffff',
    todayRangeFontColor:  '#ffffff',
    todayDescFontColor:  '#ffffff',
    todayInfoFontColor:  '#ffffff',
    todayIconColor:  '#FFF',
    forecastBackgroundColor:  '#FFF',
    forecastSeparatorColor:  '#DDD',
    forecastDateColor:  '#777',
    forecastDescColor:  '#777',
    forecastRangeColor:  '#777',
    forecastIconColor:  '#4BC4F7',
};

  //context
  const { location, getInitialLocation } = useContext(locationContext);

  //get location data for user
  useEffect(() => {
    getInitialLocation();
  },[]);

  const { data, isLoading, errorMessage, city } = useOpenWeather({
    key: process.env.REACT_APP_OPENWEATHER_API_KEY,
    lat: location?.lat || 0,
    lon: location?.lng || 0,
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  if (!location) {
    return null
  }
  
  return (
    <ReactWeather
      theme={customStyles}
      isLoading={false}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      //Note: the label here needs to be dynamic to match lat, lng
      locationLabel={location.city}
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast={false}
    />
  );
};

export default WeatherBox