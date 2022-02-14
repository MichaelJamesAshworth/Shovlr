var express = require('express');
var router = express.Router();

module.exports = (dbHelpers) => {

  router.get('/', (req, res) => {
    dbHelpers.getUsers()
      .then(users => res.json(users))
      .catch(err => res.json({error: err.message}));
  })

  router.get('/:id', (req, res) => {
    dbHelpers.getUser(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.json({error: err.message}));
  })

  return router
}