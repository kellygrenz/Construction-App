const express = require('express')
const Router = express.Router()
const Admin = require('../models/Admin')

Router.route('/')
  .get((req, res) => {
    Admin.find()
      .populate('post')
      .exec((err, admins) => {
        if (err) {
          res.json({error: err})
        } else {
          res.json({msg: 'SUCCESS', data: admins})
        }
      })
  })
  .post((req, res) => {
    const admin = new Admin()
    admin.setAdminData(req.body)
    admin.setDate()
    admin.save((err, savedAdmin) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'SUCCESS', data: savedAdmin})
      }
    })
  })

Router.route('/:adminId')
  .get((req, res) => {
    const adminId = req.params.adminId
    Admin.findById({_id: adminId})
      .populate('post')
      .exec((err, admin) => {
        if (err) {
          res.json({error: err})
        } else {
          res.json({msg: `Found: ${adminId}`, data: admin})
        }
      })
  })
  .put((req, res) => {
    const editAdminId = req.params.adminId
    Admin.findById({_id: editAdminId}, (err, admin) => {
      if (err) {
        res.json({error: err})
      } else {
        admin.setAdminData(req.body)
        admin.save((err, updatedAdmin) => {
          if (err) {
            res.json({error: err})
          } else {
            res.json({msg: `Updated ${editAdminId}`, admin: updatedAdmin})
          }
        })
      }
    })
  })
  .delete((req, res) => {
    const deleteId = req.params.adminId
    Admin.remove({_id: deleteId}, (err, admin) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: `Success on deleting ${deleteId}`, data: admin})
      }
    })
  })

module.exports = Router
