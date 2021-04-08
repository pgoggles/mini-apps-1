const path = require ('path');
const express = require('express');
const app = express ();
const port = 3001;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

app.post('/form1', (req, res) => {
  console.log(req.body);
  res.status(200);
  res.end('SUCCESS');
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});