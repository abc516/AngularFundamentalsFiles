
//bring in express library
var express = require('express');
var path = require('path')
var events = require('./eventsController')
//create express app
var app = express()
//create root variable
var rootPath = path.normalize(__dirname + '/../');
//can pull JSON out of request module
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
//serve files from app directory
app.use(express.static(rootPath + '/app'));

app.get('/data/event/:id', events.get);
app.get('/data/event', events.getAll)
app.post('/data/event/:id', events.save);
app.get('*', function (req, res) { res.sendFile(rootPath + '/app/index.html'); });

//tells which port to listen too
app.listen(8000);
console.log('Listening on port 8000...')