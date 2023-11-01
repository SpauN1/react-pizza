import React, { useState } from 'react';

import './PizzaListItem.scss';

function PizzaListItem({ title, price, imageUrl, types, sizes }) {
  const [pizzaCount, setPizzaCount] = useState(0);
  const [activeDough, setActiveDough] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const typeDough = ['тонкое', 'традиционное'];

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
            {types.map((typeId) => (
              <li
                key={typeId}
                onClick={() => setActiveDough(typeId)}
                className={activeDough === typeId ? 'pizza__params-active' : ''}
              >
                {typeDough[typeId]}
              </li>
            ))}
          </ul>
          <ul className="pizza__size">
            {sizes.map((size, i) => (
              <li
                key={i}
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? 'pizza__params-active' : ''}
              >
                {`${size} см.`}
              </li>
            ))}
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
