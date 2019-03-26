const mongoose = require ('mongoose')
const {articleSchema} = require('../schemas')
const frontArticleModel = mongoose.model('frontArticle', articleSchema)
const travelArticleModel = mongoose.model('travelArticle', articleSchema)
const essayArticleModel = mongoose.model('essayArticle', articleSchema)

module.exports = {
  frontArticleModel,
  travelArticleModel,
  essayArticleModel
}
