const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const requireCredits = require('../middleware/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplates');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.post( '/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, body, subject, recipients } = req.body;

    const survey = new Survey({
      title, 
      body,
      subject,
      recipients: recipients.split(',').map( email =>  ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    const mailer = new Mailer(survey, surveyTemplate(survey) );
    mailer.send();
  });
};


// inside of survey can also be written like 
    // title: title, 
    // body: body,
    // subject: subject,
    // recipients: recipients.split(',').map( _email => { return {email: _email}})


//USING ES6 to refactor it
      // recipients is split into and array of strings and then mapped through
      // we use the .trim to remove white space
