import React from 'react';

import Sort from '../Sort/Sort';

import './Categories.scss';

function Categories(props) {
  const { activeCategory, setActiveCategory } = props;

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
              onClick={() => setActiveCategory(i)}
              className={activeCategory === i ? 'active' : ''}
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
