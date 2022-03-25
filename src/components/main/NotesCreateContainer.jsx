import NotesCreate from './NotesCreate'
import {connect} from 'react-redux'
import {addNoteActionCreator} from '../../redux/notesReducer'



let mapStateToProps = (state) => {
    return {
        notes: state.notes.notesList      
    }
}

let mapDispatchToProps = (dispatch) => {
return {
    createNote: (newNoteTitle, newNoteBody) => {
        dispatch(addNoteActionCreator(newNoteTitle, newNoteBody))
    }
}
}

const NotesCreateContainer = connect(mapStateToProps, mapDispatchToProps)(NotesCreate)

export default NotesCreateContainer






