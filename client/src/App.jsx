import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import CheckoutForm from './components/CheckoutForm';

//Stripe related imports
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51KPUvgLzGdhWWQN43gX8AKiDzqiAUPab5CLLzJQ3VmggDKuBbmmA6aknytp7B8zOAolhN4vfZMLpAaRJ8Jva2EQu00CMiUU59f');

function App() {

  const onSubmit = () => {
    return axios.get("/http://localhost:3001", {name: 'mike'})
    .then ((response) => {
      console.log(response);
    })
    .catch ((error) => {
      console.log(error);
    }) 
  }
  
  return (
    <button onClick={onSubmit}>Submit</button>
  );
};

export default App;
