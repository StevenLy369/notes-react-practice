import React from 'react';
import NewNoteForm from './NewNoteForm'
import NoteList from './NoteList';
import Header from './Header';
import NoteDetail from './NoteDetail';
import EditNoteForm from './EditNoteForm';


class NoteControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            masterNoteList:[],
            selectedNote:null,
            editing:false
        }

    }

    handleClick = () => {
      if (this.state.selectedNote != null) {
        this.setState({
          formVisibleOnPage: false,
          selectedNote: null
        });
      } else {
        this.setState(prevState => ({
          formVisibleOnPage: !prevState.formVisibleOnPage,
        }));
      }
    }

    handleEditClick = () => {
      this.setState({editing:true})
      console.log("edit works")
    }

      handleEditingTicketInList = (noteToEdit) => {
        const editedMasterNoteList = this.state.masterNoteList.filter(note => note.id !== this.state.selectedNote.id).concat(noteToEdit);
        this.setState({masterNoteList:editedMasterNoteList})
      }

    
      handleAddingNewNoteToList = (newNote) => {
        const newMasterNoteList = this.state.masterNoteList.concat(newNote);
        this.setState({masterNoteList:newMasterNoteList,
        formVisibleOnPage:false})
      }

      handleChangingSelectedNote = (id) =>{
        const selectedNote = this.state.masterNoteList.filter(note => note.id === id)[0];
        this.setState({selectedNote: selectedNote});
        console.log("method works")
        
    }

    handleDeletingNote = (id) => {
      const newMasterNoteList = this.state.masterNoteList.filter(note => note.id !== id);
      this.setState({
        masterNoteList:newMasterNoteList,
        selectedNote:null
      })
    }


    render(){
        let currentlyVisibleState = null;
        let buttonText = null


        if(this.state.editing){
          currentlyVisibleState = <EditNoteForm ticket = {this.state.selectedTicket} />
          buttonText = "Return to list"
        }

       else if(this.state.selectedNote !=null){
            currentlyVisibleState = <NoteDetail note ={this.state.selectedNote}  onNoteDelete = {this.handleDeletingNote} onNoteEdit={this.handleEditClick}/>
            buttonText = "Return to Note List"

        }else if(this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewNoteForm onNewNoteCreation = {this.handleAddingNewNoteToList} />
            buttonText = "Return to Note List"
        }else {
          currentlyVisibleState = <NoteList noteList = {this.state.masterNoteList}  onNoteSelection = {this.handleChangingSelectedNote} />
          buttonText = "Add New Note"
        }   
      return(
        <React.Fragment>
            <Header/>
            {currentlyVisibleState}
            <button onClick ={this.handleClick}>{buttonText}</button>
            
        </React.Fragment>
      )




    }
}




export default NoteControl;