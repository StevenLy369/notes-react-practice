import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";




function NewTicketForm(props){

    function handleNewNoteFormSubmission(event) {
        event.preventDefault();
        props.onNewNoteCreation({
            note: event.target.note.value, 
            date: event.target.date.value, 
            id: v4()
        });
        
      }
    

    

    

    return (
        <React.Fragment>
        <ReusableForm 
          formSubmissionHandler={handleNewNoteFormSubmission}
          buttonText="Help!" />
      </React.Fragment>
    )
}

NewTicketForm.prototype = {
    handleNewTicketFormSubmission: PropTypes.func,
    onNewNoteCreation:PropTypes.func
};

export default NewTicketForm;