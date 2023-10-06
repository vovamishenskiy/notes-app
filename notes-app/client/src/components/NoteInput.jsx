const noteInput = ({ handleSubmit, handleInputChange, inputValue, updateNoteId }) => {
    return (
        <div className="note-input-wrapper">
            <form onSubmit={handleSubmit} className="note-input-form">
                {/* <label htmlFor="inputValue">input: </label> */}
                <input type="text" id='inputValue' value={inputValue} onChange={handleInputChange} placeholder="enter text" />
                <button type='submit'>{updateNoteId ? 'update' : 'save'}</button>
            </form>
        </div>
    )
}

export default noteInput