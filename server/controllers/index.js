var models = require('../models');

module.exports = {

  headers: {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10, // Seconds.
    'Content-Type': 'application/json'
  },


  messages: {
    get: function (req, res) {
      console.log('Sending a messages GET request in controller');
      models.messages.get(req, res);
    }, // a function which handles a get request for all messages

    post: function (req, res) {
      console.log('Sending a messages POST request in controller');
      models.messages.post(req, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('Sending a users GET request in controller');
    },
    post: function (req, res) {
      console.log('Sending a users POST request in controller');
    }
  }
};
