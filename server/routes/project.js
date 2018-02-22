const express = require('express')
const Router = express.Router()
const Project = require('../models/Project')
const Developer = require('../models/Developer')
const mongoose = require('mongoose')

Router.route('/')
  .get((req, res) => {
    Project.find()
      .populate('posts')
      .populate('developer')
      .exec((err, projects) => {
        if (err) {
          res.json({error: err})
        } else {
          res.json({msg: 'SUCCESS', data: projects})
        }
      })
  })
  .post((req, res) => {
    const project = new Project()
    project.setProjectData(req.body)
    project.setStatus(req.body)
    project.setDate()
    project.posts = req.body.posts.map(postId => mongoose.Types.ObjectId(postId))
    project.developer = mongoose.Types.ObjectId(req.body.developer)
    project.save((err, savedProject) => {
      if (err) {
        res.json({error: err})
      } else {
        Developer.findById({_id: savedProject.developer}, (err, developer) => {
          developer.projects.push(mongoose.Types.ObjectId(savedProject._id))
          developer.save((err, savedDeveloper) =>
            Project.findById({_id: savedProject._id})
              .populate('posts')
              .populate('developer')
              .exec((err, foundProject) => {
                if (err) {
                  res.json({error: err})
                } else {
                  res.json({msg: 'SUCCESS', data: foundProject})
                }
              })
          )
        })
      }
    })
  })

Router.route('/:projectId')
  .get((req, res) =>
    Project.find()
      .populate('posts')
      .populate('developer')
      .exec((err, project) => {
        if (err) {
          res.json({error: err})
        } else {
          res.json({msg: 'SUCCESS', data: project})
        }
      })
  )
  .put((req, res) => {
    const projectId = req.body.params.projectId
    Project.findById({_id: projectId}, (err, foundProject) => {
      if (err) {
        res.json({error: err})
      } else {
        req.body.posts = req.body.posts.map(postId => mongoose.Types.ObjectId(postId))
        project.posts = [...project.posts, ...req.body.posts]
        project.status = req.body.status
        project.developer = req.body.developer
        project.save((err, savedProject) => {
          if (err) {
            res.json({error: err})
          } else {
            res.json({msg: 'SUCCESS', data: savedProject})
          }
        })
      }
    })
  })
  .delete((req, res) => {
    const projectId = req.body.params.projectId
    Project.remove({_id: projectId}, (err) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: `Project: ${projectId} successfully deleted.`, data: null})
      }
    })
  })
module.exports = Router
