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
const footprintSchema = mongoose.Schema({
  name: String,
  date: Date,
  value: Array,
}, {timestamps: { createdAt: 'date_created', updatedAt: 'date_updated' }})

module.exports = {
  articleSchema,
  footprintSchema
}
