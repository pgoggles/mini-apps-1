const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('TEST');
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});