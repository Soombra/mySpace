const controllers = require('./controllers')
function apis (app) {
  app.get ('/api_test/test', controllers.controller1)
}

module.exports = apis
