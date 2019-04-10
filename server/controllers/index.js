const mongoose = require ('mongoose')
const {frontArticleModel, travelArticleModel, essayArticleModel} = require ('../models')

const controllers = {
  async queryFrontArticles (req, res, next) {
    const page = req.query.page || 1
    const limit = req.query.per_page || 10
    try {
      const totalCount = await frontArticleModel.countDocuments()
      const articles = await frontArticleModel.find ({status: 'published'}, 'title abstract date_published image', {sort:{date_published: -1}, limit, skip: limit * (page - 1)})
      res.set('x-total-count', totalCount).send(articles)
    } catch (e) {
      console.log(e)
      res.status(500).send('出了点错误')
    }
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
  async queryTravelArticles (req, res) {
    const page = req.query.page || 1
    const limit = req.query.per_page || 10
    try {
      const totalCount = await travelArticleModel.countDocuments()
      const articles = await travelArticleModel.find ({status: 'published'}, null, {sort:{date_published: -1}, limit, skip: limit * (page - 1)})
      res.set('x-total-count', totalCount).send(articles)
    } catch (e) {
      console.log(e)
      res.status(500).send('出了点错误')
    }
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
  async queryEssayArticles (req, res) {
    const page = req.query.page || 1
    const limit = req.query.per_page || 10
    try {
      const totalCount = await essayArticleModel.countDocuments()
      const articles = await essayArticleModel.find ({status: 'published'}, 'title abstract date_published image', {sort:{date_published: -1}, limit, skip: limit * (page - 1)})
      res.set('x-total-count', totalCount).send(articles)
    } catch (e) {
      console.log(e)
      res.status(500).send('出了点错误')
    }
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
