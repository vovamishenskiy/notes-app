import $ from 'jquery'

const Note = ({ note }) => {
    $('.notes-list-item').hover(function(){
        console.log('item hover');
        $('.notes-list-item').css("background-color", "gray")
    })
 
    return (
        <li className="notes-list-item">{note.content}</li>
    )
}

export default Note