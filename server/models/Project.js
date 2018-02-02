const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Project = new Schema({
  newProject: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
  img: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // needs to be changed to interact with Developer and Admin
  created: {type: Date, Default: Date.now}
})

Project.methods.setDate = function () {
  const dateNow = new Date()
  this.created = dateNow
}

Project.methods.setStatus = function (requestBody) {
  this.status = requestBody.status || this.status
}

module.exports = mongoose.model('Project', Project)