import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addItems } from '../../redux/slices/cartSlice';

import './PizzaListItem.scss';

const typeDough = ['тонкое', 'традиционное'];

function PizzaListItem({ title, price, imageUrl, types, sizes, id }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cartSlice.items.find((obj) => obj.id === id)
  );

  const [activeDough, setActiveDough] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      dough: typeDough[activeDough],
      size: activeSize,
    };
    dispatch(addItems(item));
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
            {addedCount > 0 && (
              <span className="button__pizza-circle">{addedCount}</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaListItem;
