const express = require('express');

const app = express();

app.use('/api', require('./api'));

app.listen(8080, () => {
  console.log('server is listening on port 8080!');
});
