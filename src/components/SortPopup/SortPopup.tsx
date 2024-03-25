import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SortPropertyEnum } from '../../redux/filter/types';
import { selectSort } from '../../redux/filter/selectors';
import { setSortType } from '../../redux/filter/slice';

import './SortPopup.scss';

interface SortItem {
  name: string;
  sortProperty: SortPropertyEnum;
}

export const sortList: SortItem[] = [
  { name: 'популярности (DESC)', sortProperty: SortPropertyEnum.RATING_DESC },
  { name: 'популярности (ASC)', sortProperty: SortPropertyEnum.RATING_ASC },
  { name: 'по цене (DESC)', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'по цене (ASC)', sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: 'по алфавиту (DESC)', sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: 'по алфавиту (ASC)', sortProperty: SortPropertyEnum.TITLE_ASC }
];

export const SortPopup: FC = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);

  const [openPopup, setOpenPopup] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSortType(obj));
    setOpenPopup(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpenPopup(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div
        onClick={() => setOpenPopup(!openPopup)}
        className={openPopup ? 'sort__label' : 'sort__label sort__arrow'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <p>Сортировка по:</p>
        <span onClick={() => setOpenPopup(!openPopup)}>{sort.name}</span>
      </div>
      {openPopup && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, i) => (
              <li
                onClick={() => onClickListItem(obj)}
                key={i}
                className={
                  sort.sortProperty === obj.sortProperty
                    ? 'sort__popup-active'
                    : ''
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
