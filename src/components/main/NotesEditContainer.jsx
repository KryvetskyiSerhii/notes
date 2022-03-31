import NotesEdit from './NotesEdit'
import {connect} from 'react-redux'
import {addNoteActionCreator, deleteNoteActionCreator, editNoteActionCreator} from '../../redux/notesReducer'
import { renderMatches } from 'react-router-dom'



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
    editNote: (id, newNoteTitle, newNoteBody) => {
        dispatch(editNoteActionCreator(id, newNoteTitle, newNoteBody))
    },
    deleteNote: (id) => {
        dispatch(deleteNoteActionCreator(id))
        renderMatches()
    }
}
}

const NotesEditContainer = connect(mapStateToProps, mapDispatchToProps)(NotesEdit)

export default NotesEditContainer






