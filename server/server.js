var express = require("express")
var app = express();
// var path = require("path")
// var db = require('../db/config');
// var bodyParser = require('body-parser');

// // Parse JSON (uniform resource locators)
// app.use(bodyParser.json());
// // Parse forms (signup/login)
// app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 1337;

app.listen(port, function() {
  console.log("listening on", port)
})

app.get('/', function(req, res) {
  res.status(200).send({message: 'hello world'})
});

