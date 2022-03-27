import { useFormik } from 'formik'
import { useParams } from "react-router-dom";
import classes from './NotesForm.module.css'

const NotesEdit = ({notes, ...props}) => {
  const params = useParams()

  const editNote = (values) => {
    props.editNote(params.id, values.newNoteTitle, values.newNoteBody)
  }

  const deleteNote = () => {
    props.deleteNote(params.id)
  }
     
  const initialValues = {
    id: params.id,
    newNoteTitle: notes.find(e => params.id === e.id) ? notes.find(e => params.id === e.id).noteTitle : '',
    newNoteBody: notes.find(e => params.id === e.id) ? notes.find(e => params.id === e.id).noteBody : '' 
  };
    
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (value) => {
      await editNote(value);
    },
  });

    return (
      <form  onSubmit={formik.handleSubmit} className={classes.form}>
        <input className={classes.titleInput} id="newNoteTitle" name="newNoteTitle" type="text" 
            onChange={formik.handleChange} value ={formik.values.newNoteTitle}/>
        <textarea className={classes.text} id="newNoteBody" name="newNoteBody"  onChange={formik.handleChange}
            value ={formik.values.newNoteBody}></textarea>
        <div>
          <button type="submit">Save</button>
          <button onClick={deleteNote} type='button'>Delete</button>
        </div>
      </form> 
    )
}

export default NotesEdit