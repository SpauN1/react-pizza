import React from 'react';
import { Link } from 'react-router-dom';

import basketWhite from '../../assets/img/basket-white.svg';
import logo from '../../assets/img/logo.jpg';

import Search from '../Search/Search';

import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/">
          <div className="header__logo">
            <img src={logo} alt="логотип пиццы" />
            <div>
              <h1 className="header__title">REACT PIZZA</h1>
              <p className="header__subtitle">
                самая вкусная пицца во вселенной
              </p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header__basket">
          <Link to="/cart" className="button button__header" href="#">
            <span>0 ₽</span>
            <div className="button__header-delimiter"></div>
            <img src={basketWhite} alt="иконка корзины" />
            <span>0</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
