import React from 'react';

import cheeseburgerPizza from '../../assets/img/cheeseburger-pizza.svg';
import plus from '../../assets/img/plus.svg';

import Pagination from '../Pagination/Pagination';

import './PizzaList.scss';

function PizzaList() {
  return (
    <main className="main">
      <div className="container">
        <section className="content">
          <h2 className="content__title">Все пиццы</h2>
          <div className="pizza">
            <div className="pizza__item">
              <img
                className="pizza__img"
                src={cheeseburgerPizza}
                alt="чизбургер-пицца"
              />
              <h3 className="pizza__title">Чизбургер-пицца</h3>
              <div className="pizza__params">
                <ul className="pizza__dough">
                  <li className="active">тонкое</li>
                  <li>традиционное</li>
                </ul>
                <ul className="pizza__size">
                  <li className="active">26 см.</li>
                  <li>30 см.</li>
                  <li>40 см.</li>
                </ul>
              </div>
              <div className="pizza__footer">
                <span className="pizza__price">от 395 ₽</span>
                <button className="button button__pizza">
                  <img className="button__pizza-icon" src={plus} alt="плюс" />
                  <span className="button__pizza-text">Добавить</span>
                </button>
              </div>
            </div>
            <div className="pizza__item">
              <img
                className="pizza__img"
                src={cheeseburgerPizza}
                alt="чизбургер-пицца"
              />
              <h3 className="pizza__title">Чизбургер-пицца</h3>
              <div className="pizza__params">
                <ul className="pizza__dough">
                  <li className="active">тонкое</li>
                  <li>традиционное</li>
                </ul>
                <ul className="pizza__size">
                  <li className="active">26 см.</li>
                  <li>30 см.</li>
                  <li>40 см.</li>
                </ul>
              </div>
              <div className="pizza__footer">
                <span className="pizza__price">от 395 ₽</span>
                <button className="button button__pizza">
                  <img className="button__pizza-icon" src={plus} alt="плюс" />
                  <span className="button__pizza-text">Добавить</span>
                </button>
              </div>
            </div>
            <div className="pizza__item">
              <img
                className="pizza__img"
                src={cheeseburgerPizza}
                alt="чизбургер-пицца"
              />
              <h3 className="pizza__title">Чизбургер-пицца</h3>
              <div className="pizza__params">
                <ul className="pizza__dough">
                  <li className="active">тонкое</li>
                  <li>традиционное</li>
                </ul>
                <ul className="pizza__size">
                  <li className="active">26 см.</li>
                  <li>30 см.</li>
                  <li>40 см.</li>
                </ul>
              </div>
              <div className="pizza__footer">
                <span className="pizza__price">от 395 ₽</span>
                <button className="button button__pizza">
                  <img className="button__pizza-icon" src={plus} alt="плюс" />
                  <span className="button__pizza-text">Добавить</span>
                </button>
              </div>
            </div>
            <div className="pizza__item">
              <img
                className="pizza__img"
                src={cheeseburgerPizza}
                alt="чизбургер-пицца"
              />
              <h3 className="pizza__title">Чизбургер-пицца</h3>
              <div className="pizza__params">
                <ul className="pizza__dough">
                  <li className="active">тонкое</li>
                  <li>традиционное</li>
                </ul>
                <ul className="pizza__size">
                  <li className="active">26 см.</li>
                  <li>30 см.</li>
                  <li>40 см.</li>
                </ul>
              </div>
              <div className="pizza__footer">
                <span className="pizza__price">от 395 ₽</span>
                <button className="button button__pizza">
                  <img className="button__pizza-icon" src={plus} alt="плюс" />
                  <span className="button__pizza-text">Добавить</span>
                </button>
              </div>
            </div>
            <div className="pizza__item">
              <img
                className="pizza__img"
                src={cheeseburgerPizza}
                alt="чизбургер-пицца"
              />
              <h3 className="pizza__title">Чизбургер-пицца</h3>
              <div className="pizza__params">
                <ul className="pizza__dough">
                  <li className="active">тонкое</li>
                  <li>традиционное</li>
                </ul>
                <ul className="pizza__size">
                  <li className="active">26 см.</li>
                  <li>30 см.</li>
                  <li>40 см.</li>
                </ul>
              </div>
              <div className="pizza__footer">
                <span className="pizza__price">от 395 ₽</span>
                <button className="button button__pizza">
                  <img className="button__pizza-icon" src={plus} alt="плюс" />
                  <span className="button__pizza-text">Добавить</span>
                </button>
              </div>
            </div>
            <div className="pizza__item">
              <img
                className="pizza__img"
                src={cheeseburgerPizza}
                alt="чизбургер-пицца"
              />
              <h3 className="pizza__title">Чизбургер-пицца</h3>
              <div className="pizza__params">
                <ul className="pizza__dough">
                  <li className="active">тонкое</li>
                  <li>традиционное</li>
                </ul>
                <ul className="pizza__size">
                  <li className="active">26 см.</li>
                  <li>30 см.</li>
                  <li>40 см.</li>
                </ul>
              </div>
              <div className="pizza__footer">
                <span className="pizza__price">от 395 ₽</span>
                <button className="button button__pizza">
                  <img className="button__pizza-icon" src={plus} alt="плюс" />
                  <span className="button__pizza-text">Добавить</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <Pagination />
      </div>
    </main>
  );
}

export default PizzaList;
