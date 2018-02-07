const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Admin = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  password: {type: String, required: true},

  email: {type: String, required: true},
  password: {type: String, required: true},
  project: {type: String, required: true},
  // project: {type: Schema.Types.ObjectId, ref: 'Project'},
  created: {type: Date, required: true}
})

Admin.methods.setAdminData = function (requestBody) {
  this.firstName = requestBody.firstName || this.firstName
  this.lastName = requestBody.lastName || this.lastName
  this.password = requestBody.password || this.password

  this.email = requestBody.email || this.email
  this.password = requestBody.password || this.password
  this.project = requestBody.project || this.project
}

Admin.methods.setDate = function () {
  const dateNow = new Date()
  this.created = dateNow
}

module.exports = mongoose.model('Admin', Admin)
