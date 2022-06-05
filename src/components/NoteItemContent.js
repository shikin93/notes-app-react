import React from 'react';
import propTypes from 'prop-types';

function NoteItemContent({ title, body, date }) {
  return (
    <div className="note-item__content p-3 flex-[1]">
      <h3 className="note-item__title text-ellipsis overflow-hidden font-bold mb-1">{title}</h3>
      <p className="note-item__date text-slate-100 text-sm mb-2">{date}</p>
      <p className="note-item__body break-words">{body}</p>
    </div>
  )
}

NoteItemContent.propTypes = {
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
}

export default NoteItemContent;