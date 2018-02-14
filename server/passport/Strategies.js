const bcrypt = require('bcrypt-nodejs')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')
const Admin = require('../models/Admin')
const Errors = require('./Errors')

const localStrategyConfig = {
  usernameField: 'email',
  passwordField: 'password',
  failureFlash: true
}
// console.log(localStrategyConfig.usernameField)
// console.log(localStrategyConfig.passwordField)
const isPasswordValid = (clearPassword, hashedPassword) =>
  bcrypt.compareSync(clearPassword, hashedPassword)

const generateHash = (clearPassword) =>
  bcrypt.hashSync(clearPassword, bcrypt.genSaltSync(8), null)

module.exports = (passport) => {
  passport.serializeUser(
    (user, done) => done(null, user._id)
  )

  passport.deserializeUser(User.findById.bind(User))

  passport.use('local-signup', new LocalStrategy({
    ...localStrategyConfig,
    passReqToCallback: true
  }, (req, email, password, done) => {
    User.findOne({'local.email': email}, (err, user) => {
      if (err) {
        return done(err)
      }

      if (user) {
        return done(Errors.duplicateEmail({email}))
      }

      const {body} = req
      const newUser = new User({
        local: {
          email,
          password: generateHash(password),
          firstName: body.firstName,
          lastName: body.lastName,
          role: body.role
        }
      })

      newUser.setDate()

      newUser.save(
        (err) => err ? done(err) : done(null, newUser)
      )
    })
  }))

  passport.use('local-login', new LocalStrategy(localStrategyConfig, (email, password, done) => {
    User.findOne({'local.email': email}, (err, user) => {
      if (err) {
        return done(err)
      }

      if (!user) {
        return done(Errors.unknownEmail({email}))
      }

      if (!isPasswordValid(password, user.local.password)) {
        return done(Errors.incorrectPassword())
      }

      return done(null, user)
    })
  }))

  // /////////////////////////////////Admin test section////////////////////////////////
  const localStrategyConfi = {
    usernameField: 'adminEmail',
    passwordField: 'adminPassword',
    failureFlash: true
  }
  passport.serializeUser(
    (admin, done) => done(null, admin._id)
  )
  passport.deserializeUser(Admin.findById.bind(Admin))

  passport.use('local-admin-signup', new LocalStrategy({
    ...localStrategyConfi,
    passReqToCallback: true
  }, (req, adminEmail, adminPassword, done) => {
    Admin.findOne({'local.adminEmail': adminEmail}, (err, admin) => {
      if (err) {
        return done(err)
      }

      if (admin) {
        return done(Errors.duplicateEmail({adminEmail}))
      }

      const {body} = req
      const newAdmin = new Admin({
        local: {
          adminEmail,
          adminPassword: generateHash(adminPassword),
          adminFirstName: body.adminFirstName,
          adminLastName: body.adminLastName,
          role: body.role
        }
      })

      newAdmin.setDate()

      newAdmin.save(
        (err) => err ? done(err) : done(null, newAdmin)
      )
    })
  }))

  passport.use('local-admin-login', new LocalStrategy(localStrategyConfi, (adminEmail, adminPassword, done) => {
    Admin.findOne({'local.adminEmail': adminEmail}, (err, admin) => {
      if (err) {
        return done(err)
      }

      if (!admin) {
        return done(Errors.unknownEmail({adminEmail}))
      }

      if (!isPasswordValid(adminPassword, admin.local.adminPassword)) {
        return done(Errors.incorrectPassword())
      }

      return done(null, admin)
    })
  }))
}
