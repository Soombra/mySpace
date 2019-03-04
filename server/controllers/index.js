const mongoose = require ('mongoose')
const {indexModel, articleModel} = require ('../models')

const controllers = {
  test (req, res) {
    indexModel.find ((err, result) => {
      if (err) return console.error (err);
      res.send (result)
    })
  },
  queryArticles (req, res) {
    articleModel.find((err, articles) => {
      if (err) {
        console.log(err)
        return
      }
      res.send(articles)
    })
  },
  articleDetails (req, res) {
    let _id = req.params.id
    articleModel.findOne({_id}, (err, article) => {
      if(err){
        console.log(err)
        return
      }
      res.send(article)
    })
  }
}

module.exports = controllers
