const mongoose = require('mongoose')
const Schema = mongoose.Schema

let noteSchema = new Schema({
    id: String,
    content: String
})

module.exports = mongoose.model('note', noteSchema)