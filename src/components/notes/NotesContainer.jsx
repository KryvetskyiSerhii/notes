import Notes from './Notes'
import {connect} from 'react-redux'
import {addNoteActionCreator, searchNoteActionCreator} from './../../redux/notesReducer'



let mapStateToProps = (state) => {
    return {
        notes: state.notes.notesList      
    }
}

let mapDispatchToProps = (dispatch) => {
return {
    createNote: (newNoteTitle, newNoteBody) => {
        dispatch(addNoteActionCreator(newNoteTitle, newNoteBody))
    },
    searchNote: (noteTitle) => {
        dispatch(searchNoteActionCreator(noteTitle))
    }
}
}

const NotesContainer = connect(mapStateToProps, mapDispatchToProps)(Notes)

export default NotesContainer


