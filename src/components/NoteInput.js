import React from 'react';
import propTypes from 'prop-types';

function NoteInput({ charCount, title, body, onTitle, onBody, onSubmit }) {
  return (
    <div className="note-input mx-auto max-w-2xl mb-16">
      <form onSubmit={onSubmit}>
        <p className="note-input__title__char-limit text-right text-sm text-slate-400">Sisa karakter: {charCount}</p>
        <input type="text" className="note-input__title p-2 block w-full my-4 placeholder:font-bold font-bold rounded-md" placeholder="Judul catatan" required value={title} onChange={onTitle}/>
        <textarea type="text" className="note-input__body p-2 block w-full my-4 placeholder:font-bold rounded-md h-48" placeholder="Tuliskan catatanmu di sini ..." value={body} required onChange={onBody} ></textarea>
        <button type="submit" className="w-full bg-orange-400 p-1 font-bold rounded-md hover:bg-orange-300">Buat</button>
      </form>
    </div>
  )
}

NoteInput.propTypes = {
  charCount: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  onTitle: propTypes.func.isRequired,
  onBody: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
}

export default NoteInput;
