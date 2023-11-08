import React from 'react';

import cartEmptyImg from '../../assets/img/cart-empty.svg';

import './CartEmpty.scss';

function CartEmpty() {
  return (
    <div className="cart-empty">
      <div className="cart-empty__body">
        <h2 className="cart-empty__title">Корзина пустая </h2>
        <p className="cart-empty__text">
          Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
          пиццу, перейди на главную страницу.
        </p>
        <img src={cartEmptyImg} alt="корзина" className="cart-empty__img"></img>
        <button className="button button__cart-empty">
          <span>Вернуться назад</span>
        </button>
      </div>
    </div>
  );
}

export default CartEmpty;
