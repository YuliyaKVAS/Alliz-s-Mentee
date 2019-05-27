const express = require('express');
const users = require('./users');
const courses = require('./courses');

const router = express.Router();

router.get('/users', users.getUsers);

router.get('/courses', courses.getCourses);

router.get('/authors', (req, res) => {
  res.send('v1 get authors');
});

module.exports = router;
