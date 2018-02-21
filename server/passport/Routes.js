const express = require('express')
const Errors = require('./Errors')

module.exports = (app, passport) => {
  app.post('/api/developer-sign-up', (req, res, next) => {
    passport.authenticate('local-developer-signup', (err, developer, info) => {
      if (err) {
        return next(err)
      }

      if (!developer) {
        if (!req.body.developerEmail) {
          return next(Errors.missingEmail(info))
        }
        if (!req.body.developerPassword) {
          return next(Errors.missingPassword(info))
        }
        return next(Errors.missingCredentials(info))
      }

      req.logIn(developer, (err) => {
        if (err) {
          return next(err)
        }
        return res.status(200).json({
          message: 'developer SIGNUP SUCCESSFUL',
          data: developer
        })
      })
    })(req, res, next)
  })
  app.post('/api/developer-login', (req, res, next) => {
    passport.authenticate('local-developer-login', (err, developer, info) => {
      if (err) {
        return next(err)
      }

      if (!developer) {
        if (!req.body.developerEmail) {
          return next(Errors.unknownEmail({developerEmail: '', ...info}))
        }
        if (!req.body.developerPassword) {
          return next(Errors.incorrectPassword(info))
        }
        return next(Errors.missingCredentials(info))
      }
      req.logIn(developer, (err) => {
        if (err) {
          return next(err)
        }
        return res.status(200).json({
          message: 'DEVELOPER LOGIN SUCCESSFUL',
          data: developer
        })
      })
    })(req, res, next)
  })

  app.get('/api/get_developer', (req, res) => {
    console.log(res, 'get_developer');
    console.log(req, 'get req');
    res.status(200)
      .json({
        message: req.developer ? 'DEVELOPER SESSION EXISTS' : 'DEVELOPER SESSION DOES NOT EXIST',
        data: req.developer
      })
  })

  app.get('/api/developer-logout', (req, res) => {
    req.logout()
    return res.status(200)
      .json({
        message: 'DEVELOPER LOGOUT SUCCESSFUL'
      })
  })

  // //////////////////////////////////admin section test///////////////////////////////////////////

  app.post('/api/admin-sign-up', (req, res, next) => {
    passport.authenticate('local-admin-signup', (err, admin, info) => {
      if (err) {
        return next(err)
      }

      if (!admin) {
        if (!req.body.adminEmail) {
          return next(Errors.missingEmail(info))
        }
        if (!req.body.adminPassword) {
          return next(Errors.missingPassword(info))
        }
        return next(Errors.missingCredentials(info))
      }

      req.logIn(admin, (err) => {
        if (err) {
          return next(err)
        }
        return res.status(200).json({
          message: 'ADMIN SIGNUP SUCCESSFUL',
          data: admin
        })
      })
    })(req, res, next)
  })
  app.post('/api/admin-login', (req, res, next) => {
    passport.authenticate('local-admin-login', (err, admin, info) => {
      if (err) {
        return next(err)
      }

      if (!admin) {
        if (!req.body.adminEmail) {
          return next(Errors.unknownEmail({adminEmail: '', ...info}))
        }
        if (!req.body.adminPassword) {
          return next(Errors.incorrectPassword(info))
        }
        return next(Errors.missingCredentials(info))
      }
      req.logIn(admin, (err) => {
        if (err) {
          return next(err)
        }
        return res.status(200).json({
          message: 'ADMIN LOGIN SUCCESSFUL',
          data: admin
        })
      })
    })(req, res, next)
  })

  app.get('/api/get_admin', (req, res) => {
    res.status(200)
      .json({
        message: req.admin ? 'ADMIN SESSION EXISTS' : 'ADMIN SESSION DOES NOT EXIST',
        data: req.admin
      })
  })

  app.get('/api/admin-logout', (req, res) => {
    req.logout()
    return res.status(200)
      .json({
        message: 'ADMIN LOGOUT SUCCESSFUL'
      })
  })
  // ////////////////////////////end admin section test ///////////////////////////////////////
}
