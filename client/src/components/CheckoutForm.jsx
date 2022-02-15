import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
const totalPrice = 5000

const CheckoutForm = () => {

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

  // STEP 2: make the payment after filling the form properly
  const makePayment = async (event) => {
    event.preventDefault();
    const payload = await stripe.confirmCardPayment(clientSecret, {
     payment_method: {
       card: elements.getElement(CardElement),
     },
   });
   
   if (payload.error) {
     console.log(payload.error.message);
   }

   else {
     console.log('Success!')
   }
 }

 const handleChange = async (event) => {
  // Listen for changes in the CardElement
  // and display any errors as the customer types their card details
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