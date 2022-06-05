import React from 'react';
import propTypes from 'prop-types';

function Header({ onSearch }) {
  return (
    <header>
      <nav className="navbar bg-orange-400 flex tablet:items-center justify-between mobile:flex-col tablet:flex-row px-4 py-6">
        <h1 className="navbar__header text-2xl font-bold">Catatan Pribadi</h1>
        <div className="navbar__search">
          <input type="text" className="form-input placeholder:font-bold p-2 rounded-lg mt-2 w-full" placeholder="Search notes ..." onChange={onSearch}/>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  onSearch: propTypes.func.isRequired,
}

export default Header;
