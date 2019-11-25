// build your database
const mysql = require('mysql');
const dbConnection = mysql.createConnection({
  user: 'austinliu',
  database: 'store'
});

dbConnection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to mysql products database');
  }
});

module.exports = dbConnection;