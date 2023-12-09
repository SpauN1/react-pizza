import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import PizzaListItem from '../PizzaListItem/PizzaListItem';
import Skeleton from '../Skeleton/Skeleton';
import { sortList } from '../Sort/Sort';
import { setFilters } from '../../redux/slices/filterSlice';
import { fetchPizzas } from '../../redux/slices/pizzaSlice';

import './PizzaList.scss';

function PizzaList({ categoryId, currentPage }) {
  const { sort, searchValue } = useSelector((state) => state.filterSlice);
  const { items, status } = useSelector((state) => state.pizzaSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSearch = useRef(false);
  const isMounted = useRef(false);


  const getPizzas = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        category,
        sortBy,
        order,
        search,
        currentPage,
      })
    );
  };

  // Если изменили параметры и был первый рендер
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
    // eslint-disable-next-line
  }, [categoryId, sort.sortProperty, currentPage]);

  // Если был первый рендер, то проверяем URl-параметры и сохраняем в ридаксе
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

      isSearch.current = true;
    }
    // eslint-disable-next-line
  }, []);

  // Если был первый рендер, то запрашиваем пиццы
  useEffect(() => {
    window.scrollTo(0, 0);

    getPizzas();

    isSearch.current = false;
    // eslint-disable-next-line
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const skeleton = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const pizzas = items.map((obj) => <PizzaListItem key={obj.id} {...obj} />);

  return (
    <main className="main">
      <h2 className="main__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="main__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>Не удалось получить пиццы, попробуйте позже.</p>
        </div>
      ) : (
        <div className="main__product">
          {status === 'loading' ? skeleton : pizzas}
        </div>
      )}
    </main>
  );
}

export default PizzaList;
