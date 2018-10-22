var express = require('express')
var bodyParser = require('body-parser')

var index = require('./routes/index')
var stats = require('./routes/stats')
var greet = require('./routes/greet')
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', index)
app.use('/stats', stats)
app.use('/greet', greet)

var PORT = process.env.PORT | 3000
console.log("Listening at", PORT)
app.listen(PORT)
