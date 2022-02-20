import CheckoutForm from "../components/CheckoutForm";
import RequestForm from "../components/RequestForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { locationContext } from '../providers/LocationProvider';
import { useState, useContext } from "react";

const Checkout = () => {
  const { location } = useContext(locationContext);

  const promise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

  const [ request, setRequest ] = useState({
    address: location.address,
    user_id: 1,
    size: 1,
    price: 2000,
    note: ""
  });

  const [ isConfirmed, setIsConfirmed ] = useState(false);

  return (
    <div className="checkout">
      <h1>checkout</h1>
      <div className="form-container">

      <RequestForm 
      setIsConfirmed = {setIsConfirmed}
      request = {request}
      setRequest = {setRequest} 
      location = {location}
      />
      { isConfirmed && <div>
        <Elements stripe={promise}>
          <CheckoutForm 
          request = {request}
          />
        </Elements>
      </div>}
      </div>

    </div>

  );
}

export default Checkout