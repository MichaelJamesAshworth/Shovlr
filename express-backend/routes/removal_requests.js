var express = require('express');
var router = express.Router();


module.exports = (dbHelpers) => {

  router.get('/', (req, res) => {
    dbHelpers.getRequests()
      .then(requests => res.json(requests))
      .catch(err => res.json({error: err.message}));
  })

  router.get('/completed/:id', (req, res) => {
    dbHelpers.getCompletedRequestsByUserId(req.params.id)
      .then(requests => res.json(requests))
      .catch(err => res.json({error: err.message}));
  })

  router.get('/:id', (req, res) => {
    dbHelpers.getRequestByUserId(req.params.id)
      .then(request => res.json(request))
      .catch(err => res.json({error: err.message}));
  })

  router.post('/', (req, res) => {
    dbHelpers.addRequest({...req.body})
      .then(request => res.send(request))
      .catch(err => res.json({error: err.message}));
  })

  return router
}