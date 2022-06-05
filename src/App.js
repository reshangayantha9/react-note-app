import { useState } from "react";
import { NotesList } from "./components/NotesList";
import{nanoid}from 'nanoid'

function App() {
  const [notes,setNotes]=useState([{
    id:nanoid(),
    text:"this is sample note",
    date:"6/4/2022"
  },
  {
    id:nanoid(),
    text:"this is sample note",
    date:"6/4/2022"
  },
  
]);
const addNote=(text)=>{
  const date=new Date();
  const newNote={
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString(),
  }
  const newNotes=[...notes,newNote]
  setNotes(newNotes)
}

const deleteNote=(id)=>{
  const newNotes = notes.filter((note) => note.id !== id);
	setNotes(newNotes);
}
  return (
    <div className="App">
     <NotesList notes={notes} handleAddNote={addNote}handleDeleteNote={deleteNote}/>
    </div>
  );
}

export default App;
