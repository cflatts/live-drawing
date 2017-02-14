var mongoose = require('mongoose')
var Schema = mongoose.Schema

var dotSchema = new Schema({
    x: {type: Number, required: true},
    y: {type: Number, required: true}
})

module.exports = {
    Dot: mongoose.model('Dot', dotSchema)
}