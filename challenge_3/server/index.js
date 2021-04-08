const path = require ('path');
const express = require('express');
const app = express ();
const port = 3001;
const bodyParser = require('body-parser');
const mysql = require('./mysqlHandler.js');

app.use(bodyParser.urlencoded());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

app.post('/form1', (req, res) => {
  res.status(200);
  res.end('SUCCESS');
  var queryString = `INSERT INTO formdata (name, email, password) values ('${req.body.name}', '${req.body.email}', '${req.body.password}')`;
  mysql.query(queryString, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});