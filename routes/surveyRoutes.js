const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const requireCredits = require('../middleware/requireCredits');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.post( '/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, body, subject, recipients } = req.body;

    const survey = new Survey({
      title, 
      body,
      subject,

    });
  });
};


// inside of survey can also be written like 
    // title: title, 
    // body: body,
    // subject: subject,

//USING ES6 to refactor it
