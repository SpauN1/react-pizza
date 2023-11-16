import React, { useContext } from 'react';

import search from '../../assets/img/search.svg';
import clearIcon from '../../assets/img/clear-icon.svg';

import { SearchContext } from '../../context/context';

import './Search.scss';

function Search() {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  return (
    <div className="search">
      <img src={search} alt="поиск пиццы" className="search__icon" />
      <input
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
        className="search__input"
        type="text"
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue('')}
          className="search__input-clear"
          src={clearIcon}
          alt="очистить поле ввода"
        />
      )}
    </div>
  );
}

export default Search;
