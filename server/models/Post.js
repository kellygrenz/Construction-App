const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
  title: String,
  img: String,
  // location: {
  //   address: String,
  //   state: String,
  //   city: String,
  //   zip: String
  // },
  zip: Number,
  notes: String,
  created: {type: Date, required: true}
})

Post.methods.setPostData = function (requestBody) {
  this.title = requestBody.title || this.title
  this.img = requestBody.img || this.img
  this.zip = requestBody.zip || this.zip
  this.notes = requestBody.notes || this.notes
}

Post.methods.setDate = function () {
  const dateNow = new Date()
  this.created = dateNow
}

module.exports = mongoose.model('Post', Post)
