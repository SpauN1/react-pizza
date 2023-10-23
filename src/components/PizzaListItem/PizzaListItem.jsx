import React from 'react';

import './PizzaListItem.scss';

function PizzaListItem({ title, price, img }) {
  return (
    <div className="pizza">
      <div className="pizza__item">
        <img className="pizza__img" src={img} alt="картинка пиццы" />
        <h3 className="pizza__title">{title}</h3>
        <div className="pizza__params">
          <ul className="pizza__dough">
            <li className="pizza__params-active">тонкое</li>
            <li>традиционное</li>
          </ul>
          <ul className="pizza__size">
            <li className="pizza__params-active">26 см.</li>
            <li>30 см.</li>
            <li>40 см.</li>
          </ul>
        </div>
        <div className="pizza__footer">
          <span className="pizza__price">от {price} ₽</span>
          <button className="button button__pizza">
            <span className="button__pizza-icon"></span>
            <span className="button__pizza-text">Добавить</span>
            <span className="button__pizza-circle">1</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaListItem;
