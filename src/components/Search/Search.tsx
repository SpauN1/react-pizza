import React, { ChangeEvent, FC, useCallback, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';

import search from '../../assets/img/search.svg';
import clearIcon from '../../assets/img/clear-icon.svg';

import { setSearchValue } from '../../redux/filter/slice';

import './Search.scss';

export const Search: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  //eslint-disable-next-line
  const updateSearchValue = useCallback(
    debounce((string: string) => {
      dispatch(setSearchValue(string));
    }, 250),

    []
  );

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
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
};
