const noteInput = ({ handleSubmit, handleInputChange, inputValue, updateNoteId }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="inputValue">input: </label>
                <input type="text" id='inputValue' value={inputValue} onChange={handleInputChange} />
                <button type='submit'>{updateNoteId ? 'update' : 'save'}</button>
            </form>
        </div>
    )
}

export default noteInput