import RequestRemovalButton from "../components/RequestRemovalButton";
import Map from "../components/Map";
import WeatherBox from "../components/WeatherBox"
import LocationProvider from "../providers/LocationProvider";

const Home = () => {
  return (
    <div>
      <LocationProvider>
        <WeatherBox />
        <Map />
      </LocationProvider>
      <RequestRemovalButton />
    </div>
  );
}

export default Home;