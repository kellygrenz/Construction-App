const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const adminRoute = require('./routes/admins')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/__CONSTRUCTION_DB__')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

app.use('/api/admins', adminRoute)

const server = app.listen(port, () => console.log(`Running on port: ${port}`))

module.exports = server
