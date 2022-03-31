import classes from './Notes.module.css'
import Note from './Note'
import { NavLink } from 'react-router-dom'
 


const Notes = (props) => {
    let searchNote = (e) => {
        props.searchNote(e.target.value)
    }

    let sortNotesTitle = () => {
        props.sortNotesTitle()
    }    

    let sortNotesDate = () => {
        props.sortNotesDate()
    }
    
   
    
    return (
        <div>
            <div className={classes.header}>
                <div onClick={sortNotesTitle} className={classes.titleButton} id='noteTitle'>Title</div>
                <input type='text' onChange={searchNote} placeholder='Search for note'/>
                <div id='date' onClick={sortNotesDate} className={classes.titleButton}>Date</div>
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