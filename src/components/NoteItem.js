import React from 'react';
import propTypes from 'prop-types';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

function NoteItem({ id, onDelete, onArchive, title, body, date, archived }) {
  return (
    <div className="note-item bg-slate-400 flex flex-col overflow-hidden rounded-md">
      <NoteItemContent title={title} body={body} date={date}/>
      <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} archived={archived}/>
    </div>
  )
}

NoteItem.propTypes = {
  id: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
  onArchive: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  archived: propTypes.bool.isRequired,
}

export default NoteItem;