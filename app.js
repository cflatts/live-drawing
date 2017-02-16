var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)

var PORT = 3000
server.listen(3000)

app.listen(PORT)
app.use(express.static('src'))

app.engine('html', './src/index.html')

console.log('listening on port:' + PORT)

app.get('/', function(req, res) {
   res.sendFile( __dirname + '/src/app/index.html')
})