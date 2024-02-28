import React, { FC, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import basketWhite from '../../assets/img/basket-white.svg';
import logo from '../../assets/img/logo.jpg';

import { selectCart } from '../../redux/slices/cartSlice';
import { Search } from '../index';

import './Header.scss';

export const Header: FC = () => {
  const { totalPrice, items } = useSelector(selectCart);
  const location = useLocation();
  const isMounted = useRef(false);

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

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
        {location.pathname !== '/cart' && <Search />}
        <div className="header__basket">
          <Link to="/cart" className="button button__header">
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
