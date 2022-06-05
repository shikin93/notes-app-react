import React from 'react';
import { showFormattedDate } from '../utils/data';
import propTypes from 'prop-types';
import NoteItem from './NoteItem';

function NoteList({ notes, query, onDelete, onArchive }) {
  return (
    <div className="notes-list grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4">
      {notes.filter(note => {
        if (query) {
          return note.title.toLowerCase().includes(query.toLowerCase());
        }
        return true;
      }).map((note => {
        return (
          <NoteItem
            key={note.id}
            id={note.id.toString()}
            title={note.title}
            body={note.body}
            archived={note.archived}
            date={showFormattedDate(note.createdAt)}
            onDelete={onDelete}
            onArchive={onArchive} />
        );
      }))}
    </div>
  )
}

NoteList.propTypes = {
  notes: propTypes.array.isRequired,
  query: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
  onArchive: propTypes.func.isRequired,
}

export default NoteList;