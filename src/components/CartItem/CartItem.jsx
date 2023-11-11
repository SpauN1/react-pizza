import React from 'react';

import cartPizza from '../../assets/img/cart-pizza.png';

import './CartItem.scss';

function CartItem() {
  return (
    <>
      <section className="cart__item">
        <div className="cart__item-preview">
          <div className="cart__item-img">
            <img src={cartPizza} alt="Пицца" />
          </div>
          <div className="cart__item-info">
            <h3>Сырный цыпленок</h3>
            <p>тонкое тесто, 26 см.</p>
          </div>
        </div>
        <div className="cart__item-details">
          <div className="cart__item-count">
            <button className="button-count-minus button__cart-circle">
              <span>-</span>
            </button>
            <p>2</p>
            <button className="button-count-plus button__cart-circle">
              <span>+</span>
            </button>
          </div>
          <div className="cart__item-price">
            <p>770 ₽ </p>
          </div>
          <button className="button-remove button__cart-circle">
            <span>&times;</span>
          </button>
        </div>
      </section>
      <section className="cart__item">
        <div className="cart__item-preview">
          <div className="cart__item-img">
            <img src={cartPizza} alt="Пицца" />
          </div>
          <div className="cart__item-info">
            <h3>Сырный цыпленок</h3>
            <p>тонкое тесто, 26 см.</p>
          </div>
        </div>
        <div className="cart__item-details">
          <div className="cart__item-count">
            <button className="button-count-minus button__cart-circle">
              <span>-</span>
            </button>
            <p>2</p>
            <button className="button-count-plus button__cart-circle">
              <span>+</span>
            </button>
          </div>
          <div className="cart__item-price">
            <p>770 ₽ </p>
          </div>
          <button className="button-remove button__cart-circle">
            <span>&times;</span>
          </button>
        </div>
      </section>
      <section className="cart__item">
        <div className="cart__item-preview">
          <div className="cart__item-img">
            <img src={cartPizza} alt="Пицца" />
          </div>
          <div className="cart__item-info">
            <h3>Сырный цыпленок</h3>
            <p>тонкое тесто, 26 см.</p>
          </div>
        </div>
        <div className="cart__item-details">
          <div className="cart__item-count">
            <button className="button-count-minus button__cart-circle">
              <span>-</span>
            </button>
            <p>2</p>
            <button className="button-count-plus button__cart-circle">
              <span>+</span>
            </button>
          </div>
          <div className="cart__item-price">
            <p>770 ₽ </p>
          </div>
          <button className="button-remove button__cart-circle">
            <span>&times;</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default CartItem;
