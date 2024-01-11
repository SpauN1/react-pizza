import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../../assets/img/cart-empty.svg';

import './CartEmpty.scss';

export const CartEmpty = () => {
  return (
    <div className="cart-empty">
      <div className="cart-empty__body">
        <h2 className="cart-empty__title">
          Корзина пустая <span>😕</span>
        </h2>
        <p className="cart-empty__text">
          Вероятней всего, вы не заказывали ещё пиццу. <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={cartEmptyImg} alt="корзина" className="cart-empty__img"></img>

        <Link to="/" className="button button__cart-empty">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  );
};
