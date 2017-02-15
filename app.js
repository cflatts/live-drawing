var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)

server.listen(3000)

app.use(express.static('src'))

app.get('/', function(req, res) {
    res.sendFile( __dirname + '/src/app/index.html')
})
