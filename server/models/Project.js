const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Project = new Schema({
  projectName: {type: String, required: true},
  projectDescription: {type: String, required: true},
  developer: {type: String, required: true},
  address: String,
  posts: [{type: Schema.Types.ObjectId, ref: 'project'}],
  created: {type: Date, required: true}
})

Project.methods.setProjectData = function (requestBody) {
  this.projectName = requestBody.projectName || this.projectName
  this.projectDescription = requestBody.projectDescription || this.projectDescription
  this.developer = requestBody.developer || this.developer
  this.address = requestBody.address || this.address
}

Project.methods.setDate = function () {
  const dateNow = new Date()
  this.created = dateNow
}

module.exports = mongoose.model('Project', Project)
