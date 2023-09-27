import React from 'react';

import Sort from '../Sort/Sort';

import './Categories.scss';

function Categories() {
  return (
    <nav className="categories">
      <div className="container">
        <div className="categories__content">
          <ul>
            <li className="active">Все</li>
            <li>Мясные</li>
            <li>Вегетарианская</li>
            <li>Гриль</li>
            <li>Острые</li>
            <li>Закрытые</li>
          </ul>
          <Sort />
        </div>
      </div>
    </nav>
  );
}

export default Categories;
