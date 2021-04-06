const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`JSON to CSV Listening on Port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.get('/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/app.js'));
});

app.post('/json', (req, res) => {
  console.log(req.body);
  res.status(200);
  res.end();
});

