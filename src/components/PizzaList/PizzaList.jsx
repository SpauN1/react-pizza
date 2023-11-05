import React, { useEffect, useState } from 'react';

import Pagination from '../Pagination/Pagination';
import PizzaListItem from '../PizzaListItem/PizzaListItem';

import './PizzaList.scss';

function PizzaList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://65468388fe036a2fa955ca61.mockapi.io/items')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <main className="main">
      <div className="container">
        <section className="content">
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__product">
            {items.map((obj) => (
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
