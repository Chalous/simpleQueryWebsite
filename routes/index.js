var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var boardModel = mongoose.model('board');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/query',function(req,res) {
  var regxBoardObj = {};
  regxBoardObj.$regex = req.query.key;
  regxBoardObj.$options = "i";
  var baordObj = {};
  baordObj.boardInfo = regxBoardObj;

  var regxCpuObj = {};
  regxCpuObj.$regex = req.query.key;
  regxCpuObj.$options = "i";
  var cpuObj = {};
  cpuObj.cpuInfo = regxCpuObj;

  var orObj = {};
  orObj.$or = [baordObj, cpuObj];
  boardModel.find(orObj).exec(function(err, data, count) {
    console.log('All data',data);
    // 查询后的数据在data里，将其发送回js脚本函数里，传回去的在req字段中
    res.send(data);
  })
})

module.exports = router;
