const controllers = require('./controllers')
function apis (app) {
  app.get ('/front_api/test', controllers.controller1)
}

module.exports = apis
