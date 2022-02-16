import './App.css';
import CheckoutForm from './components/CheckoutForm';
//Stripe related imports
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Account from './pages/Account';

// import axios from 'axios'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

function App() {
  return (
    <div className='App'>
      <h1>Shovlr</h1>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Checkout">Checkout</Link>
          <Link to="/Account">Account</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
      </Router>
    </div>
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
