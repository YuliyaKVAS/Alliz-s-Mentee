const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'am',
  password: '12345',
  port: 5432
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback)
};
