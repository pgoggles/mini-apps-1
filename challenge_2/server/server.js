const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const JSONParser = require('./parser.js');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`JSON to CSV Listening on Port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/app.js'));
});

app.post('/json', (req, res) => {
  var parsedCSV = JSONParser.parser(req.body);
  res.status(200);
  fs.readFile(path.join(__dirname, '../client/submission.html'), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data.toString().replace('<div id="CSV"></div>', '<div id="CSV">' + parsedCSV.replace(/\n/g, '<br></br>') + '</div>'));
    }
  });
});

