import React from 'react'
import AddNote from './addNote'
import Note from './Note'
export const NotesList = ({notes,handleAddNote,handleDeleteNote}) => {
  return (
    <div className='notes-list'>
        {notes.map((note)=>(
          <Note 
              id={note.id}
              text={note.text}
              date={note.date}
              handleDeleteNote={handleDeleteNote}
              />
        ))}
        <AddNote handleAddNote={handleAddNote}/>
    </div>
  )
}
