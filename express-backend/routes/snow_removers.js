var express = require('express');
var router = express.Router();

module.exports = (dbHelpers) => {

  router.get('/', (req, res) => {
    dbHelpers.getSnowRemovers()
      .then(snow_removers => res.json(snow_removers))
      .catch(err => res.json({error: err.message}));
  })

  return router
}