const requireLogin = require('../middleware/requireLogin');

module.exports = app => {
  app.post( '/api/surveys', requireLogin, (req, res) => {

  });
};