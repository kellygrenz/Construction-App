const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Admin = new Schema({
  name: { type: String, required: true },
  somethingLikeNemesis: {type: Schema.Types.ObjectId, ref: 'Developer'},
  projects: [{type: Schema.Types.ObjectId, ref: 'Project'}]
})

module.exports = mongoose.model('Admin', Admin)
