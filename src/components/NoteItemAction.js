import React from 'react';
import propTypes from 'prop-types';

function NoteItemAction({ id, onDelete, onArchive, archived }) {
  return (
    <div className="note-item__action flex mt-4">
      <button className="note-item__button-delete block w-full bg-red-500 hover:bg-red-300 py-2 font-bold m-2 rounded-md text-slate-900" onClick={() => onDelete(id)}>Delete</button>
      {(!archived) ? <button className="note-item__button-archive block w-full bg-yellow-500 hover:bg-yellow-300 py-2 font-bold m-2 rounded-md text-slate-900" onClick={() => onArchive(id)}>Archive</button> : <button className="note-item__button-archive block w-full bg-yellow-500 hover:bg-yellow-300 py-2 font-bold m-2 rounded-md text-slate-900" onClick={() => onArchive(id)}>Restore</button>}
    </div>
  )
}

NoteItemAction.propTypes = {
  id: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
  onArchive: propTypes.func.isRequired,
  archived: propTypes.bool.isRequired,
}

export default NoteItemAction;