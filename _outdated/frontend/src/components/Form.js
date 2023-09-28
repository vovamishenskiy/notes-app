import SaveButton from "./SaveButton"
import setting from '../img/setting.png'

const Form = ({ addNote, newNote, handleNoteChange, isImportant, setImportant, setShowAll, showAll }) => {
    return (
        // <div className='notes-form-container'>
        //     <form onSubmit={addNote} className='notes-form'>
        //         <input value={newNote} onChange={handleNoteChange} placeholder='Write your ideas here' className='form-text-input' />
        //         <input checked={isImportant} onChange={() => setImportant(prev => !prev)} value={isImportant} type='checkbox' />
        //         <SaveButton message='save'/>
        //     </form>
        //     <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'important' : 'all'}</button>
        // </div>

        <div className="notes-form-container">
            <div className="input-wrapper">
                <input value={newNote} onChange={handleNoteChange} placeholder='Write your ideas here' className='form-text-input' />
            </div>
            <div className="btn-bar">
                <button><img src={setting} width={'16px'}/></button>
            </div>
        </div>
    )
}

export default Form