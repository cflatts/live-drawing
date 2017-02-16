import * as express from ('express')
var app = express()

app.listen(3000)

app.use(express.static('src'))

// app.get('/', function(req, res) {
//     res.sendFile( __dirname + '/src/app/index.html')
// })
