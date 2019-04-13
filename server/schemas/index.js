const mongoose = require ('mongoose')
const articleSchema = mongoose.Schema({
  title: String,
  content: String,
  image: String,
  date_published: Date,
  abstract: String,
  tags: {
    type: Array,
    default: []
  },
  status: {
    type: String,
    default: 'draft'
  }
})

module.exports = {
  articleSchema
}
