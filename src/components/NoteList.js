import Note from './Note'

const NoteList = ({showAll, notes}) => {
    // function that shows either all notes or important ones, if button return 'important' function returns only important notes and vice versa
    const notesToShow = showAll ? notes : notes.filter(note => note.important === true)


    return <ul className='notes-list'>
        {notesToShow.map(note =>
            <Note key={note.id} note={note} />
        )}
    </ul>
}

export default NoteList