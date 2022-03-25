import classes from './Notes.module.css'
import Note from './Note'
import { NavLink } from 'react-router-dom'
 


const Notes = (props) => {
    let searchNote = (e) => {
        let noteTitle = e.target.value
        props.searchNote(noteTitle)
    }
    
   
    
    return (
        <div>
            <div className={classes.header}>
                <div>Title</div>
                <input type='text' onChange={searchNote} placeholder='Search for note'/>
                <div>Date</div>
            </div>
            <div className={classes.addButton}>
            <NavLink to="/main/" className={classes.link}>Add Note</NavLink>
            </div>
            {props.notes.map(element=> {
                return <Note id={element.id} title={element.noteTitle} key={`note-${element.id}`} />
            })}
        </div>
    )
}

export default Notes