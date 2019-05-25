const express = require('express');
const db = require('./queries');

const router = express.Router();

router.get('/users', db.getUsers);
router.get('/users/:id', db.getUserById);

router.get('/courses', db.getCourses);
router.get('/courses/:id', db.getCourseById);
router.put('/courses', db.createCourse);
router.put('/courses/:id', db.updateCourse);
router.delete('/courses/:id', db.deleteCourse);

router.get('/authors', (req, res) => {
  res.send('v1 get authors');
});

module.exports = router;
