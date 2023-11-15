import React, { useEffect, useState } from 'react';

import Pagination from '../Pagination/Pagination';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import Skeleton from '../Skeleton/Skeleton';

import './PizzaList.scss';

function PizzaList({ activeCategory, sortType }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';

    setIsLoading(true);
    fetch(
      `https://65468388fe036a2fa955ca61.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, [activeCategory, sortType]);

  return (
    <main className="main">
      <h2 className="main__title">Все пиццы</h2>
      <div className="main__product">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaListItem key={obj.id} {...obj} />)}
      </div>
      <Pagination />
    </main>
  );
}

export default PizzaList;
