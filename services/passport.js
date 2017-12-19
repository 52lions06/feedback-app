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
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id });

      if (existingUser) {
        done(null, existingUser);
      } else {
        const user = await new User({ googleID: profile.id }).save();
        done(null, user);
      }
    }
  )
);