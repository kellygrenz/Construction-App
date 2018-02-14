const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  local: {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    isAdmin: {type: Boolean, required: false}
  },
  // project: {type: String, required: true},
  Post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
  created: {type: Date, required: true}
})

User.methods.setUserData = function (requestBody) {
  this.firstName = requestBody.firstName || this.firstName
  this.lastName = requestBody.lastName || this.lastName
  this.password = requestBody.password || this.password
  this.email = requestBody.email || this.email
  this.password = requestBody.password || this.password
  this.isAdmin = requestBody.isAdmin || this.isAdmin
  // this.project = requestBody.project || this.project
}

User.methods.setDate = function () {
  const dateNow = new Date()
  this.created = dateNow
}

module.exports = mongoose.model('User', User)
