import React, { useCallback, useContext, useState } from 'react';
import debounce from 'lodash.debounce';

import search from '../../assets/img/search.svg';
import clearIcon from '../../assets/img/clear-icon.svg';

import { SearchContext } from '../../context/context';

import './Search.scss';
import { useRef } from 'react';

function Search() {
  const [value, setValue] = useState();
  const { setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  //eslint-disable-next-line
  const updateSearchValue = useCallback(
    debounce((string) => {
      setSearchValue(string);
    }, 250),

    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className="search">
      <img src={search} alt="поиск пиццы" className="search__icon" />
      <input
        ref={inputRef}
        onChange={onChangeInput}
        value={value}
        className="search__input"
        type="text"
        placeholder="Поиск пиццы..."
      />
      {value && (
        <img
          onClick={onClickClear}
          className="search__input-clear"
          src={clearIcon}
          alt="очистить поле ввода"
        />
      )}
    </div>
  );
}

export default Search;
