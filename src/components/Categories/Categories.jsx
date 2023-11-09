import React, { useState } from 'react';

import Sort from '../Sort/Sort';

import './Categories.scss';

function Categories() {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav className="categories">
      <div className="categories__content">
        <ul className="categories__item">
          {categories.map((element, index) => (
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={activeIndex === index ? 'active' : ''}
            >
              {element}
            </li>
          ))}
        </ul>
        <Sort />
      </div>
    </nav>
  );
}

export default Categories;
