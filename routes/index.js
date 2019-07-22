var express = require('express');
var router = express.Router();

const mineraisController = require('../controllers/mineralController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/teste', function(req, res){
  var uri = "mongodb://rodrigo:416380123rf.@mycluster-shard-00-00-zeyun.mongodb.net:27017,mycluster-shard-00-01-zeyun.mongodb.net:27017,mycluster-shard-00-02-zeyun.mongodb.net:27017/test?ssl=true&replicaSet=MyCluster-shard-0&authSource=admin&retryWrites=true&w=majority";
  mongoose.connect(uri, {
      useNewUrlParser: true
  });

});

module.exports = router;
