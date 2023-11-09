import React from 'react';
import { Link } from 'react-router-dom';

import basket from '../../assets/img/basket.svg';
import logo from '../../assets/img/logo.svg';

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
              <h1 className="title">REACT PIZZA</h1>
              <p className="subtitle">самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header__basket">
          <Link to="/cart" className="button button__header" href="#">
            <span>0 ₽</span>
            <div className="button__header-delimiter"></div>
            <img src={basket} alt="иконка корзины" />
            <span>0</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
