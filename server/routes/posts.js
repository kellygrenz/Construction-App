const express = require('express')
const Router = express.Router()
const Post = require('../models/Post')

Router.route('/')
  .get((req, res) => {
    Post.find()
      .populate('projects')
      .exec((err, posts) => {
        if (err) {
          res.json({ error: err })
        } else {
          res.json({ msg: 'SUCCESS', data: posts })
        }
      })
  })
  .post((req, res) => {
    const post = new Post()
    post.setPostData(req.body)
    post.setDate()
    post.save((err, savedPost) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'SUCCESS', data: savedPost})
      }
    })
  })

Router.route('/:postId')
  .get((req, res) => {
    const postId = req.params.postId
    Post.findById({ _id: postId })
      .populate('comments')
      .exec((err, post) => {
        if (err) {
          res.json({ error: err })
        } else {
          res.json({ msg: `FOUND: ${postId}`, data: post })
        }
      })
  })
  .put((req, res) => {
    const postId = req.params.postId
    Post.findById({ _id: postId }, (err, post) => {
      if (err) {
        res.json({ error: err })
      } else {
        post.img = req.body.img ? req.body.img : post.img
        post.title = req.body.title ? req.body.title : post.title
        post.notes = req.body.notes ? req.body.notes : post.notes
        post.save((err, updatedPost) => {
          if (err) {
            res.json({ error: err })
          } else {
            res.json({ msg: `UPDATED: ${postId}`, data: updatedPost })
          }
        })
      }
    })
  })
  .delete((req, res) => {
    const postId = req.params.postId
    Post.remove({ _id: postId }, (err, post) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: `DELETED: ${postId}`, data: post })
      }
    })
  })

module.exports = Router
