// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     res.send('<h1>Spring Notes homepage</h1>')
// })

// const port = 3010
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
// })

const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
// const mongoose = require('mongoose')

// const db = require('../config/db')
const Note = require('./model/Note')
const app = express()
dotenv.config({path: '../config/config.env'})

app.use(cors())
// db(app)

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('test')
})

app.get('/notes', (req, res) => {
    const data = Note.toString()
    if(!data) res.status(404).send('no data')
    res.status(200).send(data)
})

module.exports = app