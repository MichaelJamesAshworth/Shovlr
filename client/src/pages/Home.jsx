import RequestRemovalButton from "../components/RequestRemovalButton";
import Map from "../components/Map";
import WeatherBox from "../components/WeatherBox"

const Home = () => {
  return (
    <div>
      <WeatherBox />
      <Map />
      <RequestRemovalButton />
    </div>
  );
}

export default Home;