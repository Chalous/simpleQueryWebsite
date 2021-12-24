var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/boardWithCpuInfo");

var db = mongoose.connection;
db.on("error", function callback(err) {
    console.log("Connection failed...");
});

db.once("open", function callback() {
    console.log("Connection opened");
});

module.exports = mongoose;