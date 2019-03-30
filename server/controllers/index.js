const mongoose = require ('mongoose')
const {frontArticleModel, travelArticleModel, essayArticleModel} = require ('../models')

const controllers = {
  queryFrontArticles (req, res) {
    frontArticleModel.find({status: 'published'}, 'title abstract date_published image', (err, articles) => {
      if (err) {
        console.log(err)
        return
      }
      res.send(articles)
    })
  },
  frontArticleDetails (req, res) {
    let _id = req.params.id
    frontArticleModel.findOne({_id}, (err, article) => {
      if(err){
        console.log(err)
        return
      }
      res.send(article)
    })
  },
  queryTravelArticles (req, res) {
    travelArticleModel.find({status: 'published'}, 'title abstract date_published image', (err, articles) => {
      if (err) {
        console.log(err)
        return
      }
      res.send(articles)
    })
  },
  travelArticleDetails (req, res) {
    let _id = req.params.id
    travelArticleModel.findOne({_id}, (err, article) => {
      if(err){
        console.log(err)
        return
      }
      res.send(article)
    })
  },
  queryEssayArticles (req, res) {
    essayArticleModel.find({status: 'published'}, 'title abstract date_published image', (err, articles) => {
      if (err) {
        console.log(err)
        return
      }
      res.send(articles)
    })
  },
  essayArticleDetails (req, res) {
    let _id = req.params.id
    essayArticleModel.findOne({_id}, (err, article) => {
      if(err){
        console.log(err)
        return
      }
      res.send(article)
    })
  }
}

module.exports = controllers
