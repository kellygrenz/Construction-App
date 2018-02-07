const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
  img: String,
  weather: {type: String, required: true},
  location: {type: String, required: true},
  created: {type: Date, required: true}
})

module.exports = mongoose.model('Post', Post)