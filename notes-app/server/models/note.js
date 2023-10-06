const mongoose = require('mongoose')
const Schema = mongoose.Schema

let noteSchema = new Schema({
    id: String,
    content: String,
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('note', noteSchema)