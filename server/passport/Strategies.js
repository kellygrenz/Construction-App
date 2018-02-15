const bcrypt = require('bcrypt-nodejs')
const LocalStrategy = require('passport-local').Strategy
const Developer = require('../models/Developer')
const Admin = require('../models/Admin')
const Errors = require('./Errors')

const localStrategyConfig = {
  usernameField: 'developerEmail',
  passwordField: 'developerPassword',
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
    (admin, developer, done) => done(null, developer._id, admin._id)
  )

  passport.deserializeUser(Developer.findById.bind(Developer), Admin.findById(Admin))

  passport.use('local-developer-signup', new LocalStrategy({
    ...localStrategyConfig,
    passReqToCallback: true
  }, (req, developerEmail, developerPassword, done) => {
    Developer.findOne({'local.developerEmail': developerEmail}, (err, developer) => {
      if (err) {
        return done(err)
      }

      if (developer) {
        return done(Errors.duplicateEmail({developerEmail}))
      }

      const {body} = req
      const newDeveloper = new Developer({
        local: {
          developerEmail,
          developerPassword: generateHash(developerPassword),
          developerFirstName: body.developerFirstName,
          developerLastName: body.developerLastName,
          role: body.role
        }
      })

      newDeveloper.setDate()

      newDeveloper.save(
        (err) => err ? done(err) : done(null, newDeveloper)
      )
    })
  }))

  passport.use('local-developer-login', new LocalStrategy(localStrategyConfig, (developerEmail, developerPassword, done) => {
    Developer.findOne({'local.developerEmail': developerEmail}, (err, developer) => {
      if (err) {
        return done(err)
      }

      if (!developer) {
        return done(Errors.unknownEmail({developerEmail}))
      }

      if (!isPasswordValid(developerPassword, developer.local.developerPassword)) {
        return done(Errors.incorrectPassword())
      }

      return done(null, developer)
    })
  }))

  // /////////////////////////////////Admin test section////////////////////////////////
  const localStrategyConfi = {
    usernameField: 'adminEmail',
    passwordField: 'adminPassword',
    failureFlash: true
  }
  // passport.serializeUser(
  //   (admin, done) => done(null, admin._id)
  // )
  // passport.deserializeUser(Admin.findById.bind(Admin))

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
