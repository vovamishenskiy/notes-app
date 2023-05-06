import { useState, useEffect } from 'react'
import noteService from '../services/notes'
import '../App.css'
import Header from '../components/Header'
import Form from '../components/Form'
import NoteList from '../components/NoteList'

const Notes = (props) => {
    const [notes, setNotes] = useState(props.notes) // creating notes entity
    const [newNote, setNewNote] = useState('') // creating newNote entity to add new notes
    const [showAll, setShowAll] = useState(true) // creating showAll entity to show either all notes or important ones
    const [isImportant, setImportant] = useState(false) // creatint isImportant entity to check if note will be important

    useEffect(() => {
        noteService
            .getAll()
            .then(initialNotes => {
                setNotes(initialNotes)
            })
    }, [])

    const addNote = (event) => {
        event.preventDefault();
        const noteObject = {
            content: newNote,
            important: isImportant,
        }

        // check if input field returned something - if no, then alert user, else add new note
        if (!noteObject.content) return alert('You should enter something before saving note')

        noteService
            .create(noteObject)
            .then(returnedNote => {
                setNotes(notes.concat(returnedNote)) // adding new note to note list
                setNewNote('')
            })
    }

    const deleteNote = (id) => {
        if (window.confirm('do you want to delete this note?')) {
            noteService
                .deleteNote(id)
                .then(setNotes(notes.filter((note) => note.id !== id)))
        }
    }

    const handleNoteChange = (event) => setNewNote(event.target.value)

    return (
        <div className='notes-container'>
            <Header text='Notes' />
            <Form addNote={addNote} newNote={newNote} handleNoteChange={handleNoteChange} isImportant={isImportant} setImportant={setImportant} setShowAll={setShowAll} showAll={showAll} />
            <NoteList showAll={showAll} notes={notes} deleteNote={deleteNote} />
        </div>
    )
}

export default Notes