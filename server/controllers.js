var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017/runoob";

function controllers (app) {
  let database = {}
  MongoClient.connect (url, function (err, db) {
    if (err) throw err;
    database = db
  });

  app.get ('/api_test/test', function (req, res, next) {
    console.log ('收到请求', req.originalUrl)
    let thisCollection = database.db ('test').collection ('table')
    thisCollection.find ({}).toArray (function (err, result) {
      if (err) throw err;
      console.log ('查询成功');
      res.send (result)
    })

  })
}

module.exports = controllers
