const express = require('express');

const router = express.Router();

router.get('/users', (req, res) => {
  res.send('v1 get users');
});

router.get('/courses', (req, res) => {
  res.send('v1 get courses');
});

router.get('/authors', (req, res) => {
  res.send('v1 get authors');
});

module.exports = router;
