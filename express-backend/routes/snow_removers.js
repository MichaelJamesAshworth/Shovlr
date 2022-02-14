var express = require('express');
var router = express.Router();

module.exports = (dbHelpers) => {

  router.get('/', (req, res) => {
    dbHelpers.getSnowRemovers()
      .then(snow_removers => res.json(snow_removers))
      .catch(err => res.json({error: err.message}));
  })

  router.get('/:id', (req, res) => {
    dbHelpers.getRemover(req.params.id)
      .then(snow_remover => res.json(snow_remover))
      .catch(err => res.json({error: err.message}));
  })

  return router
}