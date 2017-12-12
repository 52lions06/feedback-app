'use strict';
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport'); //Don't need Const because I am not reusing it

const app = express();

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
require('./routes/authRoutes') (app); 


const PORT = process.env.PORT || 5000;
app.listen(PORT);


