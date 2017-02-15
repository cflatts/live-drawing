var express = require('express')
var app = express()

PORT = 3000

app.listen(PORT)

app.engine('html', './src/index.html')

console.log('listening on port:' + PORT)