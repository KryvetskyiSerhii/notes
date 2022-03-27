import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik'
import classes from './NotesForm.module.css'

const NotesCreate = (props) => {
    
    let addNote = (values) => {
      props.createNote(values.newNoteTitle, values.newNoteBody)
     }
    

    const initialValues = {
      newNoteTitle: '',
      newNoteBody: '',
    };

    const formik = useFormik({
      initialValues: initialValues,
      onSubmit: async (value) => {
        await addNote(value);
      },
      
    });

    return (
              
       
         <form onSubmit={formik.handleSubmit} className={classes.form}>
           <input className={classes.titleInput} id="newNoteTitle" name="newNoteTitle" type="text" onChange={formik.handleChange}
         
       />
           {/* <ErrorMessage name="newNoteTitle" component="div" /> */}
           <textarea className={classes.text} id="newNoteBody" name="newNoteBody" type="textarea" onChange={formik.handleChange}
         
       />
           {/* <ErrorMessage name="newNoteBody" component="div" /> */}
           <button type="submit">
             Submit
           </button>
         </form>
     
        
    )
}

export default NotesCreate