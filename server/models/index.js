var db = require('../db');

// Models are the database queries

module.exports = {
  messages: {
    get: function () {
      console.log('Sending a messages GET request in models');
      db.connection.query('SELECT * FROM messages', function(err, results) {
        if (err) {
          throw err;
        }
      });
    }, // a function which produces all the messages

    // req is a request object that has an array, res should be a callback function?
    post: function (req, res) {
      console.log('Sending a messages POST request in models');

      var body = '';
      req.setEncoding('utf8');
      req.on('data', function(chunk) {
        body += chunk;
      });

      req.on('end', function() {
        console.log('body: ', body);
      });

      // response.statusCode = 201;
      res.writeHead(201, module.exports.headers);
      res.end('');

      // db.connection.query('INSERT INTO messages (username, text, roomname) VALUES (?, ?, ?)', [req.username, req.text, req.roomname], function(err, result) {
      //   if (err) {
      //     throw err;
      //   }
      //
      // }) // a function which can be used to insert a message into the database
    }
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log('Sending a users GET request in models');
    },
    post: function () {
      console.log('Sending a users POST request in models');
    }
  }
};
