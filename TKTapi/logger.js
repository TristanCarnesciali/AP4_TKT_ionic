var fs = require("fs");
var Logger = (exports.Logger = {});
var infoStream = fs.createWriteStream("logs/info.txt");
var errorStream = fs.createWriteStream("logs/error.txt");
var debugStream = fs.createWriteStream("logs/debug.txt");

Logger.info = function(msg) {
    var message = new Date() + " : " + msg + "\r\n";
    infoStream.write(message);
};

Logger.debug = function(msg) {
    var message = new Date().toISOString() + " : " + msg + "\n";
    debugStream.write(message);
};

Logger.error = function(msg) {
    var message = new Date().toISOString() + " : " + msg + "\n";
    errorStream.write(message);
};