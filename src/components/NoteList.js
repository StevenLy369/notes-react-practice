import React from 'react';
import Note from './Note'
import PropTypes from 'prop-types';




function NoteList(props) {
  

    return(
        <React.Fragment>
            {props.noteList.map((note) => 
                <Note 
                whenNoteClicked = {props.onNoteSelection}
                      note={note.note}
                      date={note.date}
                      id={note.id}
                      key={note.id} />


            )}
         
             

        </React.Fragment>
       
        
    )
}

NoteList.propTypes = {
    noteList: PropTypes.array,
    onNoteSelection: PropTypes.func,
    
}

export default NoteList