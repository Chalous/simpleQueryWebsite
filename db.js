var mongoose = require('mongoose');
//“test”是数据库名，boardWithCpuInfo是集合名
mongoose.connect("mongodb://localhost/boardWithCpu"); 

var db = mongoose.connection;
db.on("error", function callback(err) {
    console.log("Connection failed...");
});

db.once("open", function callback() {
    console.log("Connection opened");
});

var boardSchema = new mongoose.Schema({
    boardInfo: String,
    cpuInfo: String
})

mongoose.model('board', boardSchema);
module.exports = mongoose;