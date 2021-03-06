import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import MyVerticallyCenteredModal from '../components/Modal'
import '../styles/stripe.css'

const totalPrice = 5000

const CheckoutForm = (props) => {
  let navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
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
          setClientSecret(data.clientSecret); 
        });
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

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
    })
    setModalShow(true) 
   }
 }

 const handleChange = async (event) => {
  console.log(event);
};

  return (
    <form id="payment-form" className='checkout-form' onSubmit={makePayment}>
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      <button id="submit"> Pay Now </button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </form>
  );
};

export default CheckoutForm;