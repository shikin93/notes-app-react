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
      title: '',
      body: '',
      charCount: 50,
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
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

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, 50),
        charCount: Math.max(0, 50 - event.target.value.length)
      }
    })
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.setState(prevState => ({
      notes: [...prevState.notes, {
        id: new Date().toISOString(),
        title: this.state.title,
        body: this.state.body,
        createdAt: +new Date(),
        archived: false
      }],
      title: '',
      body: '',
      charCount: 50
    }));
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
          query={this.state.searchTerm}
          charCount={this.state.charCount}
          title={this.state.title}
          body={this.state.body}
          onTitleChange={this.onTitleChangeEventHandler}
          onBodyChange={this.onBodyChangeEventHandler}
          onSubmit={this.onSubmitEventHandler} />
      </div>
    );
  }
}

export default NotesApp;