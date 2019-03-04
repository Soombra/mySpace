const mongoose = require ('mongoose')
const indexSchema = mongoose.Schema({
  text: String
});
const articleSchema = mongoose.Schema({
  title: String,
  content: String
})

module.exports = {
  indexSchema,
  articleSchema
}
