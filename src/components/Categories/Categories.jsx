import React from 'react';

import Sort from '../Sort/Sort';

import './Categories.scss';

function Categories({ categoryId, onChangeCategory }) {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <nav className="categories">
      <div className="categories__content">
        <ul className="categories__item">
          {categories.map((categoryName, i) => (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={categoryId === i ? 'active' : ''}
            >
              {categoryName}
            </li>
          ))}
        </ul>
        <Sort />
      </div>
    </nav>
  );
}

export default Categories;
