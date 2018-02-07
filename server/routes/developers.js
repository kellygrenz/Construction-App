const express = require('express')
const Router = express.Router()
const Developer = require('../models/Developer')

Router.route('/')
  .post((req, res) => {
    const developer = new Developer()
    developer.setDeveloperData(req.body)
    developer.setDate()
    developer.save((err, savedDeveloper) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'Success', data: savedDeveloper})
      }
    })
  })
  .get((req, res) => {
    Developer.find((err, developer) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'Success', data: developer})
      }
    })
  })

module.exports = Router
