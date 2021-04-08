mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your new password',
  database: 'miniapp3form'
});

connection.query('SELECT * FROM formdata', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

module.exports = connection;