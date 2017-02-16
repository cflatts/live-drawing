var express = require('express')
var app = express()
var path = require('path')
var renderFile = require('ejs').renderFile
var server = require('http').Server(app)
var io = require('socket.io')(server)

var PORT = 3000
server.listen(PORT)

// app.listen(PORT)
app.use(express.static(path.join(__dirname, 'src')))

app.set('html', renderFile)
app.set('view engine', 'ejs')

console.log('listening on port:' + PORT)

app.get('/', function(req, res) {
   res.sendFile( __dirname + '/src/app/index.html')
})