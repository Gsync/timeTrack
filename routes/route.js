const express = require('express');

const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.Project.find()
    .then((p) => {
      res.json(p);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.post('/', (req, res) => {
  db.Project.create(req.body)
    .then((newProj) => {
      res.json(newProj);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
