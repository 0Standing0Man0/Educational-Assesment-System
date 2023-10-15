// npm install mysql
// https://stackoverflow.com/questions/20992723/npm-is-not-recognized-as-internal-or-external-command-operable-program-or-bat
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ankur123"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE EAS_DB", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
    var sql = "CREATE TABLE student (name VARCHAR(100), email VARCHAR(100), password VARCHAR(100))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Student table created");
    });
    var sql = "CREATE TABLE teacher (name VARCHAR(100), email VARCHAR(100), password VARCHAR(100))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Teacher table created");
    });
  });