import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import ActiveRequest from './pages/ActiveRequest';
import Nav from './components/Nav'
import './styles/nav.css';
import './styles/home.css';
import './styles/activeRequest.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ActiveRequest" element={<ActiveRequest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
