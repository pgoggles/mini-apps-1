const path = require ('path');
const express = require('express');
const app = express ();
const port = 3001;

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'dist', 'bundle.js'));
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});