const express = require('express');
const db = require('./queries');

const router = express.Router();

router.get('/users', db.getUsers);

router.get('/courses', (req, res) => {
  res.send('v1 get courses');
});

router.get('/authors', (req, res) => {
  res.send('v1 get authors');
});

module.exports = router;
