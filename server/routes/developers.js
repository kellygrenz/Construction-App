const express = require('express')
const Router = express.Router()
const Developer = require('../models/Developer')
const mongoose = require('mongoose')

Router.route('/')
  .get((req, res) => {
    Developer.find()
      .populate('projectPage projects')
      .exec((err, developers) => {
        if (err) {
          res.json({error: err})
        } else {
          res.json({msg: 'Success', data: developers})
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

Router.route('/projectPage/:developerId')
  .put((req, res) => {
    const developerId = req.params.developerId
    Developer.findById({_id: developerId}, (err, developer) => {
      if (err) {
        res.json({error: err})
      } else {
        developer.projectPage.push(mongoose.Types.ObjectId(req.body.post_id))
        developer.save((err, developer) => {
          if (err) {
            res.json({error: err})
          } else {
            Developer.findById(developer._id)
              .populate('projectPage')
              .exec((err, developer) => {
                if (err) {
                  res.json({error: err})
                } else {
                  res.json({msg: 'SUCCESS', data: developer.projectPage})
                }
              })
          }
        })
      }
    })
  })

Router.route('/removeFromProjectPage/:developerId')
  .put((req, res) => {
    const developerId = req.params.developerId
    Developer.findById({_id: developerId}, (err, developer) => {
      if (err) {
        developer.projectPage.splice(developer.projectPage.indexOf(req.body.post_id), 1)
        developer.save((err, developer) => {
          if (err) {
            res.json({error: err})
          } else {
            Developer.findById(developer._id)
              .populate('projectPage')
              .exec((err, developer) => {
                if (err) {
                  res.json({error: err})
                } else {
                  res.json({msg: 'SUCCESS', data: developer.projectPage})
                }
              })
          }
        })
      }
    })
  })
Router.route('/:developerId')
  .get((req, res) => {
    const developerId = req.params.developerId
    Developer.findById({_id: developerId})
      .populate('projectPage')
      .exec((err, developer) => {
        if (err) {
          res.json({error: err})
        } else {
          res.json({msg: `Found: ${developerId}`, data: developer})
        }
      })
  })
  .put((req, res) => {
    const editDeveloperId = req.params.developerId
    Developer.findById({_id: editDeveloperId}, (err, developer) => {
      if (err) {
        res.json({error: err})
      } else {
        developer.setDeveloperData(req.body)
        developer.save((err, updatedDeveloper) => {
          if (err) {
            res.json({error: err})
          } else {
            res.json({msg: `Successfully Updated ${editDeveloperId}`, developer: updatedDeveloper})
          }
        })
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
