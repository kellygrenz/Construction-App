const express = require('express')
const Router = express.Router()
const Project = require('../models/Project')

Router.route('/')
  .get((req, res) => {
    Project.find()
      .populate('post')
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
    project.setDate()
    project.save((err, savedProject) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'SUCCESS', data: savedProject})
      }
    })
  })
Router.route('/:projectsId')
  .delete((req, res) => {
    const projectId = req.params.projectId
    Project.remove({_id: projectId}, (err, project) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: `Success on deleting ${projectId}`, data: project})
      }
    })
  })
Router.route('/:projectsId/post')
  .put((req, res) => {
    const projectId = req.params.projectId
    Project.findById({_id: projectId}, (err, project) => {
      if (err) {
        res.json({error: err})
      } else {
        project.projectName = req.body.projectName ? req.body.projectName : project.projectName
        project.projectDescription = req.body.projectDescription ? req.body.projectDescription : project.projectDescription
        project.developer = req.body.developer ? req.body.developer : project.developer
        project.address = req.body.address ? req.body.address : project.address
        project.save((err, updatedProject) => {
          if (err) {
            res.json({error: err})
          } else {
            res.json({msg: `Updated: ${projectId}`, data: updatedProject})
          }
        })
      }
    })
  })

module.exports = Router
