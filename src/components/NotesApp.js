import React from 'react';
import { getInitialData } from '../utils/data.js';
import Main from './Main';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      archives: [],
      searchTerm: '',
    }

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
  }

  onDeleteEventHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter(note => note.id.toString() !== id),
        archives: prevState.archives.filter(note => note.id.toString() !== id)
      };
    })
  }

  onArchiveEventHandler(id) {
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes.filter(note => note.id.toString() !== id), ...prevState.archives.filter(note => note.id.toString() === id).map(note => {
          return {
            ...note,
            archived: false,
          };
        })],
        archives: [...prevState.archives.filter(note => note.id.toString() !== id), ...prevState.notes.filter(note => note.id.toString() === id).map(note => {
          return {
            ...note,
            archived: true,
          };
        })]
      };
    });
  }

  render() {
    return (
      <div className="bg-slate-800">
        <Main 
        notes={this.state.notes}
        archives={this.state.archives}
        onDelete={this.onDeleteEventHandler}
        onArchive={this.onArchiveEventHandler}
        query={this.state.searchTerm} />
      </div>
    )
  }
}

export default NotesApp;