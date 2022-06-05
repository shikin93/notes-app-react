import React from 'react';
import PropTypes from 'prop-types';
import NoteList from './NoteList';

function Main({ notes, archives, onDelete, onArchive, query }) {
  return (
    <main className="note-app__main max-w-5xl p-4 mt-4 mx-auto">
      <h2 className="text-[1.2rem] mb-4 mt-8 text-orange-400">Daftar Catatan</h2>
      {(notes.length > 0) ?
        <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive} query={query}/> :
        <p className="notes-list__empty-message text-center text-slate-100">Tidak ada catatan</p>}
      <h2 className="text-[1.2rem] mb-4 mt-8 text-orange-400">Daftar Arsip</h2>
      {(archives.length > 0) ?
        <NoteList notes={archives} onDelete={onDelete} onArchive={onArchive} query={query}/> :
        <p className="notes-list__empty-message text-center text-slate-100">Tidak ada catatan</p>}
    </main>
  )
}

Main.propTypes = {
  notes: PropTypes.array.isRequired,
  archives: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
}

export default Main;