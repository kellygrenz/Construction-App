const express = require('express')
const Router = express.Router()
const Post = require('../models/Post')

Router.route('/')
  .get((req, res) => {
    Post.find((err, posts) => {
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
    Post.findById({ _id: postId }, (err, post) => {
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
        post.setProductData(req.body)
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
    const deletePost = req.params.postId
    Post.remove({ _id: deletePost }, (err, post) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: `DELETED: ${deletePost}`, data: post })
      }
    })
  })

module.exports = Router
