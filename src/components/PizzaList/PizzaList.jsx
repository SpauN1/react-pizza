import React from 'react';

import asianStyleShrimp from '../../assets/img/asian-style-shrimp.svg';
import cheese from '../../assets/img/cheese.svg';
import cheeseChicken from '../../assets/img/cheeseChicken.svg';
import cheeseburgerPizza from '../../assets/img/cheeseburger-pizza.svg';

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
            <PizzaListItem title="Чизбургер-пицца" price="395" img={cheeseburgerPizza}/>
            <PizzaListItem title="Сырная" price="450" img={cheese}/>
            <PizzaListItem title="Креветки по-азиатски" price="290" img={asianStyleShrimp}/>
            <PizzaListItem title="Сырный цыпленок" price="385" img={cheeseChicken}/>
            <PizzaListItem title="Сырная" price="450" img={cheese}/>
            <PizzaListItem title="Креветки по-азиатски" price="290" img={asianStyleShrimp}/>
            <PizzaListItem title="Сырный цыпленок" price="385" img={cheeseChicken}/>
          </div>
        </section>
        <Pagination />
      </div>
    </main>
  );
}

export default PizzaList;
