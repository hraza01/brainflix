import React from 'react';
import SearchIcon from '../../assets/icons/search.svg';
import './_NavBar.scss';

function SearchBar() {
  return (
    <div className="nav__searchbar-container">
      <img className="nav__searchbar-logo" src={SearchIcon} alt="search-logo" />
      <input
        className="nav__searchbar-input"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBar;
