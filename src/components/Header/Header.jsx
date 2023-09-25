import React from 'react';

import basket from '../../assets/img/basket.svg';
import logo from '../../assets/img/logo.svg';

import Search from '../Search/Search';

import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="#">
          <div className="header__logo">
            <img src={logo} alt="логотип пиццы" />
            <div>
              <h1>REACT PIZZA</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </a>
        <Search />
        <div className="header__basket">
          <a href="#" className="header__basket-button">
            <span>0 ₽</span>
            <div className="header__basket-delimiter"></div>
            <img src={basket} alt="иконка корзины" />
            <span>0</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
