const express = require('express')
const app = express()
const path = require('path')
const renderFile = require('ejs').renderFile

// const io = require('socket.io')(app)



const PORT = 3000
app.listen(PORT)

app.use(express.static('dist'))



app.set('html', renderFile)
app.set('view engine', 'ejs')

console.log('listening on port:' + PORT)

// app.get('/home', function(req, res) {
//     console.log(req)
//     console.log(res)
//    res.sendFile( __dirname + '/src/index.html')
// })

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' })
//   socket.on('my other event', function (data) {
//     console.log(data)
//   });
// })
