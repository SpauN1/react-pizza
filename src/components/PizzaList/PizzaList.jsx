import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import PizzaListItem from '../PizzaListItem/PizzaListItem';
import Skeleton from '../Skeleton/Skeleton';
import { SearchContext } from '../../context/context';

import './PizzaList.scss';

function PizzaList({ categoryId, currentPage }) {
  const sortType = useSelector((state) => state.filterSlice.sort.sortProperty);

  const { searchValue } = useContext(SearchContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `search=${searchValue}` : '';
    const url = `https://65468388fe036a2fa955ca61.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`;

    setIsLoading(true);

    axios.get(url).then((res) => {
      setItems(res.data);
      setIsLoading(false);
    });
  }, [categoryId, sortType, searchValue, currentPage]);

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
