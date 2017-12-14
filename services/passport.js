const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id); //we are grabbing the mongo id from the user record we created 
});

passport.deserializeUser((id, done) => {
  User.findById(id) //still using the mongo id because we may have multiple strategies
    .then((user) => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleID: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            // then nothing should happen
            done(null, existingUser);
          } else {
            // other wise we should be having a new id made and saved 
            new User({ googleID: profile.id })
              .save()
              .then((user) => done(null, user));
          }
        });
    }
  )
);