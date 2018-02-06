const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Admin = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  // password: {type: String, reqired: true},
  // poc: {type: Schema.Types.ObjectId, ref: 'Developer'}, // poc stands for Point of Contact
  // projects: [{type: Schema.Types.ObjectId, ref: 'Project'}],
  created: {type: Date, default: Date.now}
})

Admin.methods.setAdminData = function (requestBody) {
  this.name = requestBody.name || this.name
  this.email = requestBody.email || this.email
  // this.password = requestBody.password || this.password
}

Admin.methods.setDate = function () {
  const dateNow = new Date()
  this.created = dateNow
}
module.exports = mongoose.model('Admin', Admin)
