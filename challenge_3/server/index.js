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
  var queryString = `INSERT INTO formdata (name, email, password) values ('${req.body.name}', '${req.body.email}', '${req.body.password}')`;
  mysql.query(queryString, (err, data) => {
    if (err) {
      res.status(400);
      res.end('FAILURE');
    } else {
      var retrieveString = `SELECT ID FROM formdata WHERE password='${req.body.password}' and email='${req.body.email}'`;
      mysql.query(retrieveString, (err, data) => {
        if (err) {
          res.end('Failure Retrievining ID');
        } else {
          res.status(200);
          res.end(data[0].ID.toString());
        }
      });
    }
  });
});

app.post('/form2', (req, res) => {
  var queryString = `UPDATE formdata SET address1='${req.body.address1}', address2='${req.body.address2}', city='${req.body.city}', state='${req.body.state}', zip=${req.body.zipcode}, phone=${req.body.phone} WHERE ID=${req.body.id}`;
  mysql.query(queryString, (err, data) => {
    if (err) {
      res.status(400);
      res.end('Failure storing additional data');
    } else {
      res.status(200);
      res.end('Success storing additional data');
    }
  });
});

app.post('/form3', (req, res) => {
  var queryString = `UPDATE formdata SET ccnumber=${req.body.ccnumber}, expiry='${req.body.expiry}', cvv=${req.body.cvv}, billingzip=${req.body.billingzip} WHERE ID=${req.body.id}`;
  mysql.query(queryString, (err, data) => {
    if (err) {
      res.status(400);
      res.end('Failure storing additional data');
    } else {
      mysql.query(`SELECT * FROM formdata where ID=${req.body.id}`, (err, data) => {
        if (err) {
          res.status(400);
          res.end('Failure retrieving stored data');
        } else {
          res.status(200);
          res.end(JSON.stringify(data));
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});