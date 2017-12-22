'use strict';
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');

require('./models/User');
require('./models/Survey');
require('./services/passport'); //Don't need Const because I am not reusing it

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // max time before cookie expires in ms
    keys: [keys.cookieKey]
  })
);

// This is how the cookie session is activated 
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI);

//exporting a function so only need to call it with "app" to use the routes
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // we want Express to be able to access main.js or main.css
  app.use(express.static('client/build'));
  // we want Express to be able to access index.html if there is a route foreign to Express 
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);


// bodyParser - //takes data from a req and turns it into an object javascript can understand