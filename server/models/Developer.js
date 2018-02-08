const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Developer = new Schema({
  developerFirstName: { type: String, required: true },
  developerLastName: {type: String, required: true},
  developerEmail: {type: String, required: true},
  developerPassword: {type: String, required: true},
  created: {type: Date, default: Date.now}
})

Developer.methods.setDeveloperData = function (requestBody) {
  this.developerFirstName = requestBody.developerFirstName || this.developerFirstName
  this.developerLastName = requestBody.developerLastName || this.developerLastName
  this.developerEmail = requestBody.developerEmail || this.deveoperEmail
  this.developerPassword = requestBody.developerPassword || this.developerPassword
}

Developer.methods.setDate = function () {
  const dateNow = new Date()
  this.created = dateNow
}

module.exports = mongoose.model('Developer', Developer)
