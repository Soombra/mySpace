const mongoose = require ('mongoose')
const {articleSchema, footprintSchema} = require('../schemas')
const frontArticleModel = mongoose.model('frontArticle', articleSchema)
const travelArticleModel = mongoose.model('travelArticle', articleSchema)
const essayArticleModel = mongoose.model('essayArticle', articleSchema)
const footprintModel = mongoose.model('footprint', footprintSchema)

module.exports = {
  frontArticleModel,
  travelArticleModel,
  essayArticleModel,
  footprintModel
}
