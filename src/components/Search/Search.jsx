import search from '../../assets/img/search.svg';

import './Search.scss';

import React from 'react';

function Search() {
  return (
    <div className="search">
      <img src={search} alt="поиск пиццы" className="search__icon" />
      <input
        className="search__input"
        type="text"
        placeholder="Поиск пиццы..."
      />
    </div>
  );
}

export default Search;
