import React from 'react';

import pizzas from '../../assets/pizzas.json';
import Pagination from '../Pagination/Pagination';
import PizzaListItem from '../PizzaListItem/PizzaListItem';

import './PizzaList.scss';

function PizzaList() {
  return (
    <main className="main">
      <div className="container">
        <section className="content">
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__product">
            {pizzas.map((obj) => (
              <PizzaListItem key={obj.id} {...obj} />
            ))}
          </div>
        </section>
        <Pagination />
      </div>
    </main>
  );
}

export default PizzaList;
