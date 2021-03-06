import './App.css';
import './styles/account.css'
import './styles/pastRequests.css'
import './styles/search.css'
import './styles/home.css'
import './styles/checkout.css'
import './styles/nav.css'
import './styles/status.css'
import './styles/newTheme.css'

// Stripe related imports
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Status from './pages/Status';
import Account from './pages/Account';
import PastRequests from './pages/PastRequests';
import LocationProvider from "./providers/LocationProvider";


// Import Components
import Nav from './components/Nav';
import CheckoutForm from './components/CheckoutForm';

// import axios from 'axios'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

function App() {
  return (
    <LocationProvider>
      <div className='App'>
          <Router>
            <Nav />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Checkout" element={<Checkout />} />
                <Route path="/Status" element={<Status />} />
                <Route path="/Account/*" element={<Account />} />
                <Route path="/Account/PastRequests" element={<PastRequests />} />
              </Routes>
          </Router>
      </div>
    </LocationProvider>
  );
};

{/* <button onClick={onSubmit}>Submit</button> */}

/*
Sample code to test that front-end and back-end is communicating properly:
function App() {
  const onSubmit = () => {
    return axios.get("http://localhost:3001", )
    .then ((response) => {
      console.log(response.data);
    })
    .catch ((error) => {
      console.log(error);
    }) 
  }
  
  return (
    <button onClick={onSubmit}>Submit</button>
  );
};
*/
export default App;

