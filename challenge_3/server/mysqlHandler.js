mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your new password',
  database: 'miniapp3form'
});
module.exports = connection;