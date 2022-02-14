const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // <-- change the key here

/* GET home page. */
/*The commented code within this route was just to make sure front-end was communicating with
back-end. The corresponding commented code is within app.jsx lines 24-41. Left in case we needed to check again */
router.get("/", function(req, res) {
  // console.log("hello from index");
  // res.send("Communication test for front to back-end: data from index.js line 9");
});


router.post("/create-payment-intent", async(req, res) => {
  const { email, price } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: price,
    currency: "cad",
    //Verify your integration in this guide by including this parameter
    metadata: { integrationCheck: "accept a payment" },
    recepientEmail: email,
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

module.exports = router;
