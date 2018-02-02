const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Developer = new Schema({
  name: { type: String, required: true },
  somethingLikeNemesis: {type: Schema.Types.ObjectId, ref: 'Admin'},
  projects: [{type: Schema.Types.ObjectId, ref: 'Project'}]
})

module.exports = mongoose.model('Developer', Developer)
