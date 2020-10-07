import React from 'react';
import PropTypes from 'prop-types';

function Note(props) {

    return (
        <React.Fragment>
            <div onClick ={() => props.whenNoteClicked(props.id)}>
            <h4>Task: {props.note}</h4>
            <h5>Date: {props.date}</h5>
            </div>
        
        </React.Fragment>
    )
}


Note.propTypes = {
    note: PropTypes.string,
    date: PropTypes.string,
    whenNoteClicked:PropTypes.func,
    id: PropTypes.string,
}

export default Note;