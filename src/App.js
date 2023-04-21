import { useState } from 'react'
import './App.css'
import Note from './components/Note'

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

  // function that shows either all notes or important ones, if button return 'important' function returns only important notes and vice versa
  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div className='notes-form-container'>
        <form onSubmit={addNote} className='notes-form'>
          <input value={newNote} onChange={handleNoteChange} placeholder={'text'} />
          <input checked={isImportant} onChange={() => setImportant(prev => !prev)} value={isImportant} type='checkbox' />
          <button type='submit'>save</button>
        </form>
        <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'important' : 'all'}</button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App