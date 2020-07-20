const express = require('express');

const PORT = process.env.PORT || 7000;
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(PORT, function () {
  console.log('Listening on port: ' + PORT);
});
