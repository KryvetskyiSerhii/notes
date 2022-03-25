import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik'
import { useState } from 'react';
import { useParams } from "react-router-dom";
import classes from './NotesForm.module.css'


const NotesEdit = (props) => {
 
  const params = useParams()
  const {notes} = props   
    const [newTitle, setNewTitle] = useState(notes.find(e => params.id === e.id).noteTitle)
    const [newBody, setNewBody] = useState(notes.find(e => params.id === e.id).noteBody)
     let editNote = (values) => {
      props.editNote(params.id, values.newNoteTitle, values.newNoteBody)
    }

    let deleteNote = () => {
      props.deleteNote(params.id)
    }
     
    

    const initialValues = {
      id: '',
      newNoteTitle: newTitle,
      newNoteBody: newBody 
    };
    

    const formik = useFormik({
      initialValues: initialValues,
      onSubmit: async (value) => {
        console.log(value);
        await editNote(value);
      },
      onChange: values => {
        console.log(values);}
      
    });

    const handleChange = (e)=>{
      console.log(e.target.value)
      if(e.target.id === 'newNoteTitle') {
        setNewTitle(e.target.value)
      }
      else if (e.target.id === 'newNoteBody') {
        setNewBody(e.target.value)
      }
      // const {name,value} = e.target;
      // formik.setFieldValue(name,value);
     }

    return (
              
       
         <form onSubmit={formik.handleSubmit} className={classes.form}>
           <input className={classes.titleInput} id="newNoteTitle" name="newNoteTitle" type="text" onChange={handleChange}
            value ={formik.initialValues.newNoteTitle}
       />
           {/* <ErrorMessage name="newNoteTitle" component="div" /> */}
           <textarea className={classes.text} id="newNoteBody" name="newNoteBody"  onChange={handleChange}
            value ={formik.initialValues.newNoteBody}
       ></textarea>
           {/* <ErrorMessage name="newNoteBody" component="div" /> */}
          <div>
           <button type="submit">
             Save
           </button>
            <button onClick={deleteNote} type='button'>Delete</button>
           </div>
         </form>
     
        
    )
}

export default NotesEdit