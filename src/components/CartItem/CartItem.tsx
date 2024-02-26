import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import {
  ICartItem,
  addItem,
  minusItem,
  removeItem,
} from '../../redux/slices/cartSlice';

import './CartItem.scss';

interface CartItemProps {
  id: string;
  title: string;
  price: number;
  count: number;
  size: number;
  dough: string;
  imageUrl: string;
}

export const CartItem: FC<CartItemProps> = (props) => {
  const { id, title, price, count, size, dough, imageUrl } = props;

  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as ICartItem)
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <section className="cart__item">
        <div className="cart__item-preview">
          <div className="cart__item-img">
            <img src={imageUrl} alt="Пицца" />
          </div>
          <div className="cart__item-info">
            <h3>{title}</h3>
            <p>
              {dough}, {size} см.
            </p>
          </div>
        </div>
        <div className="cart__item-details">
          <div className="cart__item-count">
            <button
              disabled={count === 1}
              onClick={onClickMinus}
              className="button-count-minus button__cart-circle"
            >
              <span>-</span>
            </button>
            <p>{count}</p>
            <button
              onClick={onClickPlus}
              className="button-count-plus button__cart-circle"
            >
              <span>+</span>
            </button>
          </div>
          <div className="cart__item-price">
            <p>{price * count} ₽ </p>
          </div>
          <button
            onClick={onClickRemove}
            className="button-remove button__cart-circle"
          >
            <span>&times;</span>
          </button>
        </div>
      </section>
    </>
  );
};
