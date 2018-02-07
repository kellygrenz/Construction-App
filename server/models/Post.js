const mongoose = require('mongoose')
const Schema = mongoose.Schema


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
  img: String,
  weather: {type: String, required: true},
  address: {type: String, required: true},
  notes: String,
  created: {type: Date, required: true}
})

Post.methods.setPost = function (requestBody) {
  this.img = requestBody.img || this.img
  this.weather = requestBody.weather || this.weather
  this.address = requestBody.address || this.address
  this.notes = requestBody.notes || this.notes
}

Post.methods.setDate = function () {
  const dateNow = new Date()
  this.created = dateNow
}

module.exports = mongoose.model('Post', Post)
