import { useFormik, ErrorMessage } from "formik";
import classes from "./NotesForm.module.css";
import * as Yup from "yup";

const NotesCreate = (props) => {
  let addNote = (values) => {
    props.createNote(values.newNoteTitle, values.newNoteBody);
  };

  const initialValues = {
    newNoteTitle: "",
    newNoteBody: "",
  };

  const validationSchema = Yup.object({
    newNoteTitle: Yup.string()
      .max(120, "Must be no more than 120 characters")
      .min(3, "Must be at least 4 characters")
      .required("Required field"),
    newNoteBody: Yup.string()
      .max(500, "Must be no more than 120 characters")
      .min(5, "Must be at least 6 characters")
      .required("Required field"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (value) => {
      await addNote(value);
    },
    validationSchema: validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <input
        className={classes.titleInput}
        id="newNoteTitle"
        name="newNoteTitle"
        type="text"
        onChange={formik.handleChange}
      />
      <ErrorMessage name="newNoteTitle" component="div" />
      <textarea
        className={classes.text}
        id="newNoteBody"
        name="newNoteBody"
        type="textarea"
        onChange={formik.handleChange}
      />
      {/* <ErrorMessage name="newNoteBody" component="div" /> */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default NotesCreate;
