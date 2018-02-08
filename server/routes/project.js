const express = require('express')
const Router = express.Router()
const Project = require('../models/Project')

Router.route('/')
  .get((req, res) => {
    Project.find((err, projects) => {
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

module.exports = Router
