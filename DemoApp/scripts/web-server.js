
//bring in express library
var express = require('express');
var path = require('path')
//create express app
var app = express()
//create root variable
var rootPath = path.normalize(__dirname + '/../');

//serve files from app directory
app.use(express.static(rootPath + '/app'));

//tells which port to listen too
app.listen(8000);
console.log('Listening on port 8000...')