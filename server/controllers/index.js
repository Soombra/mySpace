const mongoose = require ('mongoose')
const indexModel = require ('../models')

const controllers = {
  controller1 (req, res, next) {
    indexModel.find (function (err, result) {
      if (err) return console.error (err);
      res.send (result)
    })
  }
}

module.exports = controllers
