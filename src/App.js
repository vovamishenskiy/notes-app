import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import NoteList from './components/NoteList'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes) // creating notes entity
  const [newNote, setNewNote] = useState('') // creating newNote entity to add new notes
  const [showAll, setShowAll] = useState(true) // creating showAll entity to show either all notes or important ones
  const [isImportant, setImportant] = useState(false) // creatint isImportant entity to check if note will be important

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: isImportant,
      id: notes.length + 1,
    }

    // check if input field returned something - if no, then alert user, else add new note
    if (!noteObject.content) return alert('You should enter something before saving note')

    setNotes(notes.concat(noteObject)) // adding new note to note list
    setNewNote('')
  }

  const handleNoteChange = (event) => setNewNote(event.target.value)



  return (
    <div>
      <Header text='Notes' />
      <Form addNote={addNote} newNote={newNote} handleNoteChange={handleNoteChange} isImportant={isImportant} setImportant={setImportant} setShowAll={setShowAll} showAll={showAll} />
      <NoteList showAll={showAll} notes={notes} />
    </div>
  )
}

export default App