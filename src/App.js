import './App.css';
import NotesContainer from './components/notes/NotesContainer';
import NotesCreateContainer from './components/main/NotesCreateContainer';
import {Route, Link, Routes} from 'react-router-dom'
import NotesEditContainer from './components/main/NotesEditContainer';
function App(props) {
  return (
    <div className="appWrapper">
      <NotesContainer store={props.store} />
      <Routes>
      
     
      <Route path='/main/' element ={<NotesCreateContainer store={props.store} />} />
      <Route path='/main/:id'  element ={<NotesEditContainer store={props.store} />} />
    </Routes> 
    </div>
  );
}

export default App;
