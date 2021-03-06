const db = require('../db');

const getCourses = (request, response) => {
  db.query('SELECT * FROM courses', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getCourses
};
