import React, { useContext, useEffect, useState } from 'react';

import PizzaListItem from '../PizzaListItem/PizzaListItem';
import Skeleton from '../Skeleton/Skeleton';
import { SearchContext, SortContext } from '../../context/context';

import './PizzaList.scss';

function PizzaList({ activeCategory, currentPage }) {
  const { searchValue } = useContext(SearchContext);
  const { sortType } = useContext(SortContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `search=${searchValue}` : '';
    const url = `https://65468388fe036a2fa955ca61.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`;

    setIsLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, [activeCategory, sortType, searchValue, currentPage]);

  const skeleton = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const pizzas = items.map((obj) => <PizzaListItem key={obj.id} {...obj} />);

  return (
    <main className="main">
      <h2 className="main__title">Все пиццы</h2>
      <div className="main__product">{isLoading ? skeleton : pizzas}</div>
    </main>
  );
}

export default PizzaList;
