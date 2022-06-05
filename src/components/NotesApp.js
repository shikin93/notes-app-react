import React from 'react';
import { getInitialData } from '../utils/data.js';
import Main from './Main';
import Header from './Header.js';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      archives: [],
      searchTerm: '',
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onDeleteEventHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter(note => note.id.toString() !== id),
        archives: prevState.archives.filter(note => note.id.toString() !== id)
      };
    });
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

  onSearchEventHandler(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }


  render() {
    return (
      <div className="bg-slate-800">
        <Header onSearch={this.onSearchEventHandler} />
        <Main
          notes={this.state.notes}
          archives={this.state.archives}
          onDelete={this.onDeleteEventHandler}
          onArchive={this.onArchiveEventHandler}
          query={this.state.searchTerm} />
      </div>
    );
  }
}

export default NotesApp;