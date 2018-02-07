const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Admin = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  project: {type: String, required: true},
  created: {type: Date, required: true}
})

Admin.methods.setAdminData = function (requestBody) {
  this.name = requestBody.name || this.name
  this.email = requestBody.email || this.email
  this.project = requestBody.project || this.project
}

Admin.methods.setDate = function () {
  const dateNow = new Date()
  this.created = dateNow
}

module.exports = mongoose.model('Admin', Admin)
