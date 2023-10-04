import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import uniqid from 'uniqid'
import './App.css'

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [notes, setNotes] = useState([])

  const handleInputChange = (e) => setInputValue(e.target.value)

  const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()

      // const id = uniqid.process()
      // console.log(typeof(id), id)

      const noteObject = {
        id: genRanHex(24),
        content: inputValue
      }

      await fetch('http://127.0.0.1:4242/postNoteObject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/JSON' },
        body: JSON.stringify(noteObject)
      })

      setInputValue('')
    } catch (err) { console.log(err) }
  }

  useEffect(() => {
    fetch('http://127.0.0.1:4242/getNotes', {
      method: 'GET',
      headers: { 'Content-Type': 'application/JSON' },
    }).then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.error('error fetching notes: ', err))
  }, [notes])

  const deleteNote = async (noteId) => {
    try {
      const response = await fetch(`http://127.0.0.1:4242/deleteNote/${noteId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setNotes(notes.filter((note) => note._id !== noteId))
      } else {
        console.error('error deleting note: ', response.status)
      }
    } catch (err) { console.error('Error deleting note: ', err) }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="inputValue">input: </label>
          <input type="text" id='inputValue' value={inputValue} onChange={handleInputChange} />
          <button type='submit'>save</button>
        </form>
      </div>

      {notes &&
        <div>
          <ul>
            {notes.map((note) => (
              <div key={note.id}>
                {note.content}
                <button onClick={() => deleteNote(note._id)}>delete note</button>
              </div>
            ))}
          </ul>
        </div>
      }
    </>

  )
}

export default App
