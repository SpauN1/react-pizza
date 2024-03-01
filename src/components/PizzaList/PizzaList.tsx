import React, { FC, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import { PizzaListItem, Skeleton, sortList } from '../index';
import { useAppDispatch } from '../../redux/store';
import { selectFilter } from '../../redux/filter/selectors';
import { selectPizzaData } from '../../redux/pizza/selectors';
import { fetchPizzas } from '../../redux/pizza/asyncActions';
import { SearchPizzaParams } from '../../redux/pizza/types';
import { setFilters } from '../../redux/filter/slice';

import './PizzaList.scss';

interface PizzaListProps {
  categoryId: number;
  currentPage: number;
}

export const PizzaList: FC<PizzaListProps> = ({ categoryId, currentPage }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { sort, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzaData);

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
        currentPage: String(currentPage),
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
      const params = qs.parse(
        window.location.search.substring(1)
      ) as unknown as SearchPizzaParams;

      const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);

      dispatch(
        setFilters({
          searchValue: params.search,
          categoryId: Number(params.category),
          currentPage: Number(params.currentPage),
          sort: sort || sortList[0],
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

  const pizzas = items.map((obj: any) => (
    <PizzaListItem key={obj.id} {...obj} />
  ));

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
};
