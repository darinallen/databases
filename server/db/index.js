var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


// mysql -u root -p

// USE the chat database

exports.connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

exports.connection.connect();



  // db.connection.query('CREATE TABLE people(id int primary key, name varchar(255), age int, address text)', function(err, result) {
  //   if (err) throw err
  //   db.connection.query('INSERT INTO people (name, age, address) VALUES (?, ?, ?)', ['Larry', '41', 'California, USA'], function(err, result) {
  //     if (err) throw err
  //     db.connection.query('SELECT * FROM people', function(err, results) {
  //       if (err) throw err
  //     })
  //   })
  // })
