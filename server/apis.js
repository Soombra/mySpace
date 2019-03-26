const controllers = require('./controllers')
function apis (app) {
  app.get ('/front-end/articles', controllers.queryFrontArticles)
  app.get ('/front-end/article/:id', controllers.frontArticleDetails)
  app.get ('/travel/articles', controllers.queryTravelArticles)
  app.get ('/travel/article/:id', controllers.travelArticleDetails)
  app.get ('/essay/articles', controllers.queryEssayArticles)
  app.get ('/essay/article/:id', controllers.essayArticleDetails)
}

module.exports = apis
