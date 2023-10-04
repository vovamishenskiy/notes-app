const noteList = ({ notes, deleteNote, handleNoteEdit }) => {
    return (
        <div>
            <ul>
                {notes.map((note) => (
                    <div key={note.id}>
                        {note.content}
                        <button onClick={() => handleNoteEdit(note.id, note.content)}>edit note</button>
                        <button onClick={() => deleteNote(note._id)}>delete note</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default noteList