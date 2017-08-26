const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const keys = require('../config/keys')
const Customer = require('mongoose').model('Customer')

const authenticate = async (accessToken, refreshToken, profile, done) => {
  const existingCustomer = await Customer.findOne({ oAuthId: profile.id })
  if (existingCustomer) {
    done(null, existingCustomer)
  } else {
    const newCustomer = await Customer.create({
      oAuthId: profile.id,
      displayName: profile.displayName
    })
    done(null, newCustomer)
  }
}

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: '/auth/facebook/callback'
    },
    authenticate
  )
)
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    authenticate
  )
)
