import RequestRemovalButton from "../components/RequestRemovalButton";
import Map from "../components/Map";
import WeatherBox from "../components/WeatherBox"
import LocationProvider from "../providers/LocationProvider";

const Home = () => {
  return (
    <div>
      <LocationProvider>
        <div className="weather-box">
          <WeatherBox />
        </div>
        <div className="map">
          <Map />
        </div>
      </LocationProvider>
      <RequestRemovalButton />
    </div>
  );
}

export default Home;