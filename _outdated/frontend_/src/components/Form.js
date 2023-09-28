import SaveButton from "./SaveButton"

const Form = ({ addNote, newNote, handleNoteChange, isImportant, setImportant, setShowAll, showAll }) => {   
    return (
        <div className='notes-form-container'>
            <form onSubmit={addNote} className='notes-form'>
                <input value={newNote} onChange={handleNoteChange} placeholder='Write your ideas here' className='form-text-input' />
                <input checked={isImportant} onChange={() => setImportant(prev => !prev)} value={isImportant} type='checkbox' />
                <SaveButton message='save'/>
            </form>
            <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'important' : 'all'}</button>
        </div>
    )
}

export default Form