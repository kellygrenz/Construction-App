const express = require('express')
const Router = express.Router()
const Project = require('../models/Project')

Router.route('/api/posts')
  .post((req, res) => {
    Project.find((err, projects) => {
      if (err) {
        res.json({ error: err})
      } else {
        res.json({ msg: 'SUCCESS', data: projects})
      }
    })
  })
  .post((req, res) => {
    const project = new Project()
    project.setProjectData(req.body)
    project.setDate()
    project.save((err, savedProject) => {
      if (err) {
        res.json({ error: err})
      } else {
        res.json({ msg: 'SUCCESS', data: savedProject})
      }
    })
  })

module.exports = Router
