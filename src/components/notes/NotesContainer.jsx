import Notes from './Notes'
import {connect} from 'react-redux'
import {addNoteActionCreator, searchNoteActionCreator, sortNotesDateActionCreator, sortNotesTitleActionCreator} from './../../redux/notesReducer'



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
    },
    sortNotesTitle: () => {
        dispatch(sortNotesTitleActionCreator())
    },
    sortNotesDate: () => {
        dispatch(sortNotesDateActionCreator())
    }
}
}

const NotesContainer = connect(mapStateToProps, mapDispatchToProps)(Notes)

export default NotesContainer


