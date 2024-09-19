const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});
module.exports = app;