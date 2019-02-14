const mongoose = require ('mongoose')
const indexSchema = require('../schemas')
const indexModel = mongoose.model('index', indexSchema)

module.exports = indexModel
