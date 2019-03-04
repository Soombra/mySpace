const mongoose = require ('mongoose')
const {indexSchema , articleSchema} = require('../schemas')
const indexModel = mongoose.model('index', indexSchema)
const articleModel = mongoose.model('article', articleSchema)

module.exports = {
  indexModel,
  articleModel
}
