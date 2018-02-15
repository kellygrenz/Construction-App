const express = require('express')
const Router = express.Router()
const Developer = require('../models/Developer')

Router.route('/')
  .get((req, res) => {
    Developer.find()
      .populate('post')
      .exec((err, developer) => {
        if (err) {
          res.json({error: err})
        } else {
          res.json({msg: 'Success', data: developer})
        }
      })
  })
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

Router.route('/:developerId')
  .get((req, res) => {
    const developerId = req.params.developerId
    Developer.findById({_id: developerId})
      .populate('post')
      .exec((err, developer) => {
        if (err) {
          res.json({error: err})
        } else {
          res.json({msg: `Found: ${developerId}`, data: developer})
        }
      })
  })
  .delete((req, res) => {
    const developerId = req.params.developerId
    Developer.remove({_id: developerId}, (err, developer) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: `Deleted: ${developerId}`, data: developer})
      }
    })
  })

module.exports = Router
