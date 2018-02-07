const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Developer = new Schema({
  name: { type: String, required: true },
  img: String,
  weather: {type: String, required: true},
  location: {type: String, required: true},
  created: {type: Date, required: true}
})

Developer.methods.setAdminData = function (requestBody) {
  this.name = requestBody.name || this.name
  this.img = requestBody.img || this.img
  this.weather = requestBody.weather || this.weather
  this.location = requestBody.location || this.location
}

Developer.methods.setDate = function () {
  const dateNow = new Date()
  this.created = dateNow
}

module.exports = mongoose.model('Developer', Developer)
