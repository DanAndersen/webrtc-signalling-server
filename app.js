//
/// Setup the Symple server

var https   = require("https");
var fs      = require("fs");

var Symple = require('symple');
var sy = new Symple();
sy.loadConfig(__dirname + '/symple.json'); // see symple.json for options

if (process.env.PORT) {
  sy.config.port = process.env.PORT;
  console.log("overriding port to " + sy.config.port);
}

sy.init();
console.log('Symple server listening on port ' + sy.config.port);