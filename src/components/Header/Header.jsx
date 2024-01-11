import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import basketWhite from '../../assets/img/basket-white.svg';
import logo from '../../assets/img/logo.jpg';

import { selectCart } from '../../redux/slices/cartSlice';
import { Search } from "../Search/Search";

import './Header.scss';

export const Header = () => {
  const { totalPrice, items } = useSelector(selectCart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

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
            <span>{totalPrice} ₽</span>
            <div className="button__header-delimiter"></div>
            <img src={basketWhite} alt="иконка корзины" />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
