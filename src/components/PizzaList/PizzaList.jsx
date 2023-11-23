import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import PizzaListItem from '../PizzaListItem/PizzaListItem';
import Skeleton from '../Skeleton/Skeleton';
import { SearchContext } from '../../context/context';
import { sortList } from '../Sort/Sort';
import { setFilters } from '../../redux/slices/filterSlice';

import './PizzaList.scss';

function PizzaList({ categoryId, currentPage }) {
  const { sort } = useSelector((state) => state.filterSlice);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { searchValue } = useContext(SearchContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortList.find(
        (obj) => obj.sortProperty === params.sortProperty
      );

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
    }
  }, []);

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `search=${searchValue}` : '';
    const url = `https://65468388fe036a2fa955ca61.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`;

    setIsLoading(true);

    axios.get(url).then((res) => {
      setItems(res.data);
      setIsLoading(false);
    });
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sort.sortProperty,
      categoryId,
      currentPage,
    });

    navigate(`?${queryString}`);
  }, [categoryId, sort, currentPage, navigate]);

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
