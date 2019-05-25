const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'am',
  password: '12345',
  port: 5432
});

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getCourses = (request, response) => {
  pool.query('SELECT * FROM courses', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getCourseById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM courses WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createCourse = (request, response) => {
  const { id, name, description } = request.body;

  pool.query('INSERT INTO courses (name, description) VALUES ($1, $2, $3)', [id, name, description], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`User added with ID: ${results.insertId}`);
  });
};

const deleteCourse = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM users WHERE id = $1', [id], (error) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Course deleted with ID: ${id}`);
  });
};

const updateCourse = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, description } = request.body;

  pool.query(
    'UPDATE courses SET name = $1, description = $2 WHERE id = $3',
    [name, description, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Course modified with ID: ${id}`);
    }
  );
};

module.exports = {
  getUsers,
  getUserById,
  getCourses,
  getCourseById,
  createCourse,
  deleteCourse,
  updateCourse
};
