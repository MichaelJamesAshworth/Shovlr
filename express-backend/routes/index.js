const express = require("express");
const router = express.Router();
const stripe = require("stripe");

/* GET home page. */
//code within this route is just to make sure front-end was communicating with back-end:
router.get("/", function (req, res) {
  console.log("hello from index");
  res.send("Communication test for front to back-end: data from index.js line 9");
});

router.post("pay", async (req, res) => {
  const { email } = req.body;

  const paymentIntent = await stripe.paymentIntent.create({
    amount: 5000,
    currency: "cad",
    //Verify your integration in this guide by including this parameter
    metadata: { integrationCheck: "accept a payment" },
    recepientEmail: email,
  });
  res.json({ "client_secret": paymentIntent["client_secret"] });
});

// .then version of above:
// router.post("pay", (req, res) => {
//   const { email } = req.body;

//   stripe.paymentIntent
//     .create({
//       amount: 5000,
//       currency: "cad",
//       //Verify your integration in this guide by including this parameter
//       metadata: { integrationCheck: "accept a payment" },
//       recepientEmail: email,
//     })
//     .then((paymentIntent) => {
//       res.json({ client_secret: paymentIntent["client_secret"] });
//     });
// });

module.exports = router;
