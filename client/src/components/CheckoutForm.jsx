import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const totalPrice = 5000


const CheckoutForm = (props) => {
  
  let navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price: totalPrice }),
      })
        .then(res => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);  // <-- setting the client secret here
        });
  }, []);

  // STEP 2: make the payment/update DB after filling the form properly
  const makePayment = async (event) => {
    event.preventDefault();
    const payload = await stripe.confirmCardPayment(clientSecret, {
     payment_method: {
       card: elements.getElement(CardElement),
     },
   });
   console.log("before payment:", props.request)
   
   if (payload.error) {
     console.log(payload.error.message);
   }

   else {
    await axios.post('http://localhost:3001/api/removal_requests', 
    {
      "users_email": props.request.users_email,
      "total_cents": props.request.price,
      "size": props.request.size,
      "note": props.request.note,
      "user_id": props.request.user_id,
      "address": props.request.address
    }
    
    //In order to transition to status page, useNavigate from react router documentation
    
    )
    navigate("/Status");
    console.log('Payment Successfull!')
   }
 }

 // Listen for changes in the CardElement
 // and display any errors as the customer types their card details
 const handleChange = async (event) => {
  console.log(event);
};

  return (
    <form id="payment-form" onSubmit={makePayment}>
      <CardElement id="card-element" onChange={handleChange} />
      <button id="submit"> Pay Now </button>
    </form>
  );
};

export default CheckoutForm;