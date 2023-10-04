const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
let mongoose = require('mongoose')
require('dotenv').config()
const Note = require('./models/note')
const app = express()
const jsonParser = bodyParser.json()
const port = 4242
const dbUri = 'mongodb://127.0.0.1:27017/notes-app'
app.use(cors())

mongoose.connect(dbUri, { useUnifiedTopology: true, useNewUrlParser: true })
const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB database connection established')
})

app.get('/', (req, res) => {
    res.send('hello, backend world!')
})

app.post('/postNoteObject', jsonParser, async (req, res) => {
    try {
        const noteObject = req.body

        const newNote = new Note({
            id: noteObject.id,
            content: noteObject.content
        })

        await newNote.save()

        res.status(201).json({ message: 'note saved to database' })
    } catch (err) {
        console.error('error saving note to database:', err)
        res.status(500).json({ message: 'Internal server error' })
    }
})

app.get('/getNotes', async (req, res) => {
    try {
        const notes = await Note.find()
        res.json(notes)
    } catch (err) {
        console.error('error retrieving notes from database:', err)
        res.status(500).json({ message: 'Internal server error' })
    }
})

app.delete('/deleteNote/:noteId', async (req, res) => {
    try {
        const noteId = req.params.noteId
        await Note.findByIdAndDelete(noteId)
        res.status(200).json({message: 'Note deleted successfully'})
    } catch(err) {
        console.error('error deleting note:', err)
        res.status(500).json({message: 'Internal server error'})
    }
})

app.put('/updateNote/:updateNoteId', jsonParser, async (req, res) => {
    try {
        const updateNoteId = req.params.updateNoteId
        const updatedContent = req.body.content

        const objectId = new mongoose.Types.ObjectId(updateNoteId)

        const updatedNote = await Note.findByIdAndUpdate(
            objectId,
            {content: updatedContent},
            {new: true}
        )

        if(!updatedNote) return res.status(404).json({message: 'Note not found'})

        res.status(200).json({message: 'Note updated successfully', updatedNote})
    } catch (err) {
        console.error('error updating note:', err)
        res.status(500).json({message: 'Internal server error'})
    }
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})