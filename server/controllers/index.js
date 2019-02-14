const mongoose = require ('mongoose')
const indexModel = require ('../models')

const controllers = {
  controller1 (req, res, next) {
    let thisData = new indexModel ({text: '是否能收到酒囊饭袋开始酒囊饭袋淑女风款式大方那可是你可否但是开发你的伤口上岛咖啡呢看谁的烦恼都是烦恼是'})
    thisData.save ()
    indexModel.find (function (err, result) {
      if (err) return console.error (err);
      res.send (result)
    })
  }
}

module.exports = controllers
