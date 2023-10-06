import { useEffect, useState } from 'react'
import { debounce } from 'lodash' // TODO: fix millions of requests every millisecond
import './App.css'
import { genRanHex } from './functions'
import { NoteList, NoteInput } from './components'

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [notes, setNotes] = useState([])
  const [updateNoteContent, setUpdateNoteContent] = useState('')
  const [updateNoteId, setUpdateNoteId] = useState('')

  const handleInputChange = (e) => setInputValue(e.target.value)

  const handleNoteEdit = (noteId, content) => {
    setUpdateNoteContent(content)
    setUpdateNoteId(noteId)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (updateNoteId) {
      try {
        const updatedNote = {
          id: updateNoteId,
          content: updateNoteContent,
        }

        await fetch(`http://127.0.0.1:4242/updateNote/${updateNoteId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedNote)
        })

        setUpdateNoteContent('')
        setUpdateNoteId('')
      } catch (err) { console.log(err) }
    } else {
      try {
        const noteObject = {
          id: genRanHex(24),
          content: inputValue
        }

        await fetch('http://127.0.0.1:4242/postNoteObject', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(noteObject)
        })

        setNotes((prevNotes) => [...prevNotes, noteObject])

        setInputValue('')
      } catch (err) { console.log(err) }
    }
  }

  // useEffect(() => {
  //   fetch('http://127.0.0.1:4242/getNotes', {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setNotes(data))
  //     .catch((err) => console.error('error fetching notes: ', err))
  // }, [notes])

  const fetchNotes = () => {
    fetch('http://127.0.0.1:4242/getNotes', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.error('error fetching notes: ', err))
  }

  const debouncedFetchNotes = debounce(fetchNotes, 0)

  useEffect(() => {
    debouncedFetchNotes()
  }, [])

  const deleteNote = async (noteId) => {
    try {
      const response = await fetch(`http://127.0.0.1:4242/deleteNote/${noteId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setNotes(notes.filter((note) => note.id !== noteId))
        // setNotes((prevNotes) => prevNotes.filter((note) => note._id !== noteId))
      } else {
        console.error('error deleting note: ', response.status)
      }
    } catch (err) { console.error('Error deleting note: ', err) }
  }

  return (
    <>
      <NoteInput handleInputChange={handleInputChange} handleSubmit={handleSubmit} inputValue={inputValue} />

      {notes &&
        <NoteList notes={notes} deleteNote={deleteNote} handleNoteEdit={handleNoteEdit} updateNoteId={updateNoteId} handleSubmit={handleSubmit} updateNoteContent={updateNoteContent} setUpdateNoteContent={setUpdateNoteContent} setUpdateNoteId={setUpdateNoteId} />
      }
    </>
  )
}

export default App