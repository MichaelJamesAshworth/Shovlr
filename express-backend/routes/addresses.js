var express = require('express');
var router = express.Router();


module.exports = (dbHelpers) => {

  router.get('/', (req, res) => {
    dbHelpers.getAddresses()
      .then(addresses => res.json(addresses))
      .catch(err => res.json({error: err.message}));
  })

  router.get('/:id', (req, res) => {
    dbHelpers.getAddressByUserId(req.params.id)
      .then(address => res.json(address))
      .catch(err => res.json({error: err.message}));
  })

  return router
}