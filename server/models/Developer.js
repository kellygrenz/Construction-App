const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Developer = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},

  poc: {type: Schema.Types.ObjectId, ref: 'Admin'}, // poc stands for Point of Contact
  projects: [{type: Schema.Types.ObjectId, ref: 'Project'}],
})

Developer.methods.setAdminData = function (requestBody) {
  this.name = requestBody.name || this.name
  this.email= requestBody.email || this.email
}

Developer.methods.setDate = function () {
  const dateNow = new Date()
  this.created = dateNow
}

module.exports = mongoose.model('Developer', Developer)
