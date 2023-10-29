import React, { useState } from 'react';

import './PizzaListItem.scss';

function PizzaListItem({ title, price, imageUrl }) {
  const [pizzaCount, setPizzaCount] = useState(0);

  const onClickAdd = () => {
    setPizzaCount(pizzaCount + 1);
  };

  return (
    <div className="pizza">
      <div className="pizza__item">
        <img className="pizza__img" src={imageUrl} alt="картинка пиццы" />
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
          <button onClick={onClickAdd} className="button button__pizza">
            <span className="button__pizza-icon"></span>
            <span className="button__pizza-text">Добавить</span>
            <span className="button__pizza-circle">{pizzaCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaListItem;
