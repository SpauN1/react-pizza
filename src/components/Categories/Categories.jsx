import React from 'react';

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
    </nav>
  );
}

export default Categories;
