const controllers = require('./controllers')
function apis (app) {
  app.get ('/front_api/test', controllers.test)
  app.get ('/articles', controllers.queryArticles)
  app.get ('/article/:id', controllers.articleDetails)
}

module.exports = apis
