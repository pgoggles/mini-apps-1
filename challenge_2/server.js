const express = require('express');
const app = express();
const port = 3001;
const path = require('path');

app.listen(port, () => {
  console.log(`JSON to CSV Listening on Port ${port}`);
});

app.get('/', (req, res) => {
  console.log('Serving up get request');
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

