// npm install mysql
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ankur123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});