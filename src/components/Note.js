const Note = ({ note }) => {
    return (
        <li className="notes-list-item">{note.content}</li>
    )
}

export default Note