import { useFormik } from "formik";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./NotesForm.module.css";

const NotesEdit = ({ notes, ...props }) => {
  const { id } = useParams();

  const initialValues = {
    id: id,
    newNoteTitle: "",
    newNoteBody: "",
  };

  const {setFieldValue ,...formik} = useFormik({
    initialValues: initialValues,
    onSubmit: async (value) => {
      await editNote(value);
    },
  });

  useEffect(() => {
    setFieldValue(
      "newNoteTitle",
      notes.find((e) => id === e.id)
        ? notes.find((e) => id === e.id).noteTitle
        : ""
    );
    setFieldValue(
      "newNoteBody",
      notes.find((e) => id === e.id)
        ? notes.find((e) => id === e.id).noteBody
        : ""
    );
  }, [id, setFieldValue, notes]);

  const editNote = (values) => {
    props.editNote(id, values.newNoteTitle, values.newNoteBody);
    initialValues.newNoteTitle = notes.find((e) => id === e.id)
      ? notes.find((e) => id === e.id).noteTitle
      : "";
  };

  const deleteNote = () => {
    props.deleteNote(id);
  };

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      {/* {id} */}
      <input
        className={classes.titleInput}
        id="newNoteTitle"
        name="newNoteTitle"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.newNoteTitle}
      />
      <textarea
        className={classes.text}
        id="newNoteBody"
        name="newNoteBody"
        onChange={formik.handleChange}
        value={formik.values.newNoteBody}
      ></textarea>
      <div>
        <button type="submit">Save</button>
        <button onClick={deleteNote} type="button">
          Delete
        </button>
      </div>
    </form>
  );
};

export default NotesEdit;
