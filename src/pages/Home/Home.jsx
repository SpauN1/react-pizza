import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, Pagination, PizzaList, Sort } from '../../components';
import {
  selectFilter,
  setCategoryId,
  setCurrentPage,
} from '../../redux/slices/filterSlice';

export const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, currentPage } = useSelector(selectFilter);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  return (
    <>
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          onChangeCategory={onChangeCategory}
        />
        <Sort />
      </div>
      <PizzaList currentPage={currentPage} categoryId={categoryId} />
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
};
