const noteList = ({ notes, deleteNote, handleNoteEdit }) => {
    return (
        <div className="note-list-wrapper">
            <ul className="note-list">
                {notes.map((note) => (
                    <div key={note.id} className="note-list-item">
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