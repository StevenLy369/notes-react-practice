import React from 'react';
import PropTypes from 'prop-types';

function NoteDetail(props){
    const {note,onNoteDelete,onNoteEdit} = props;



    return(
       <React.Fragment>
           <h1>Note Detail Page</h1>
           <h2>Notes: {note.note}</h2>
           <h4>Date:{note.date}</h4>
           <button onClick={() => onNoteDelete(note.id)}>Delete note</button>
           <button onClick={onNoteEdit}>Edit Notes</button>
       </React.Fragment>
       
    )

}

NoteDetail.propTypes = {
    note: PropTypes.object,
    onNoteDelete:PropTypes.func,
    onNoteEdit:PropTypes.func,
}



export default NoteDetail;