const Form = ({ addNote, newNote, handleNoteChange, isImportant, setImportant, setShowAll, showAll }) => {
    return (
        <div className='notes-form-container'>
            <form onSubmit={addNote} className='notes-form'>
                <input value={newNote} onChange={handleNoteChange} placeholder={'text'} />
                <input checked={isImportant} onChange={() => setImportant(prev => !prev)} value={isImportant} type='checkbox' />
                <button type='submit'>save</button>
            </form>
            <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'important' : 'all'}</button>
        </div>
    )
}

export default Form