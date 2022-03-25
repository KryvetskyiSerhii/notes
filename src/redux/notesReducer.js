
const ADD_NOTE = 'ADD-NOTE'
const EDIT_NOTE= 'EDIT_NOTE'
const DELETE_NOTE = 'DELETE_NOTE'
const SEARCH_NOTE = 'SEARCH_NOTE'



let initialState = {
    notesList : [
        {
            id: '4',
            noteTitle: '1',
            noteBody: "12"
        },
        {
            id: '2',
            noteTitle: 'note',
            noteBody: 'gdfgdf'
        }
      ]
      
  }

const notesReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ADD_NOTE: {
        let newNote = {
            id: Date(),
            noteTitle: action.newNoteTitle,
            noteBody: action.newNoteBody 
        }
        let newState = {...state,
        notesList: [...state.notesList]}
        newState.notesList.push(newNote) 
        return newState; }      
        

        case EDIT_NOTE: {
            let newNote = {
                id: action.id,
                noteTitle: action.newNoteTitle,
                noteBody: action.newNoteBody 
            }
            let newState = {...state,
            notesList: [...state.notesList]}
            let targetIdPosition = newState.notesList.findIndex(e=>e.id===action.id)
            newState.notesList.splice(targetIdPosition, 1, newNote) 
            return newState;
        }
        case DELETE_NOTE: {
            let newState = {...state,
                notesList: [...state.notesList]}
            newState.notesList = newState.notesList.filter(e => e.id !== action.id) 
            return newState;
        }
        case SEARCH_NOTE: {
            let newState = {...state,
                notesList: [...state.notesList]} 
            newState.notesList = newState.notesList.
            filter(e => {
                if (action.noteTitle.trim() === '') return e
                else return e.noteTitle.toLowerCase().includes(action.noteTitle)})
            return newState 
        }
        default: return state;
        }  
}

export const  addNoteActionCreator = (newNoteTitle, newNoteBody) => ({type: ADD_NOTE, newNoteTitle, newNoteBody })
export const editNoteActionCreator = (id, newNoteTitle, newNoteBody) => ({type: EDIT_NOTE, id, newNoteTitle, newNoteBody})
export const deleteNoteActionCreator = (id) => ({type: DELETE_NOTE, id})
export const searchNoteActionCreator = (noteTitle) => ({type: SEARCH_NOTE, noteTitle})
export default notesReducer