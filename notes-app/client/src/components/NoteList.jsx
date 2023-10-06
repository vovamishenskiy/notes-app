const noteList = ({ notes, deleteNote, handleNoteEdit, updateNoteId, handleSubmit, updateNoteContent, setUpdateNoteContent, setUpdateNoteId }) => {
    return (
        <div className="note-list-wrapper">
            <ul className="note-list">
                {notes.map((note) => (
                    <div key={note.id} className="note-list-item">
                        <div className="note-list-item-content">
                            {note.createdAt && 
                                <span>{note.createdAt.slice(8, 10)}/{note.createdAt.slice(5, 7)}/{note.createdAt.slice(0, 4)} {note.createdAt.slice(11, 16)}</span>
                            }
                            <span>{note.content}</span>
                        </div>
                        {updateNoteId &&
                            <div className="update-note-wrapper">
                                <form onSubmit={handleSubmit} className="update-note-form">
                                    <input type="text" value={updateNoteContent} onChange={(e) => setUpdateNoteContent(e.target.value)} />
                                    <div className="update-note-btn-group">
                                        <button type='submit'>update</button>
                                        <button onClick={() => setUpdateNoteId('')}>cancel</button>
                                    </div>
                                </form>
                            </div>
                        }
                        <div className="note-list-item-btn-group">
                            <button onClick={() => handleNoteEdit(note.id, note.content)}>edit note</button>
                            <button onClick={() => deleteNote(note._id)}>delete note</button>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default noteList