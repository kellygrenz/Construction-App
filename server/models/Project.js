const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Project = new Schema({
  projectName: {type: String, required: true},
  projectDescription: {type: String, required: true},
  address: String,
  status: {type: Number, default: 0},
  developer: {type: Schema.Types.ObjectId, ref: 'Developer'},
  posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
  created: {type: Date, default: Date.now}
})

Project.methods.setProjectData = function (requestBody) {
  this.projectName = requestBody.projectName || this.projectName
  this.projectDescription = requestBody.projectDescription || this.projectDescription
  this.address = requestBody.address || this.address
}

Project.methods.setDate = function () {
  const dateNow = new Date()
  this.created = dateNow
}

Project.methods.setStatus = function (requestBody) {
  this.status = requestBody.status || this.status
}
module.exports = mongoose.model('Project', Project)
