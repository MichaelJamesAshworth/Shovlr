import ReactWeather, { useOpenWeather } from 'react-open-weather';

const WeatherBox = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: process.env.REACT_APP_OPENWEATHER_API_KEY,
    lat: '47.5615',
    lon: '52.7126',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="St. John's"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};

export default WeatherBox