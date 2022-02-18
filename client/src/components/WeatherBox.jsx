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
  
  const customStyles = {
    fontFamily:  'Helvetica, sans-serif',
    gradientStart:  '#0181C2',
    gradientMid:  '#04A7F9',
    gradientEnd:  '#4BC4F7',
    locationFontColor:  '#FFF',
    todayTempFontColor:  '#FFF',
    todayDateFontColor:  '#B5DEF4',
    todayRangeFontColor:  '#B5DEF4',
    todayDescFontColor:  '#B5DEF4',
    todayInfoFontColor:  '#B5DEF4',
    todayIconColor:  '#FFF',
    forecastBackgroundColor:  '#FFF',
    forecastSeparatorColor:  '#DDD',
    forecastDateColor:  '#777',
    forecastDescColor:  '#777',
    forecastRangeColor:  '#777',
    forecastIconColor:  '#4BC4F7',
  };

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
      showForecast
    />
  );
};

export default WeatherBox