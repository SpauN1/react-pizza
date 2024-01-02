import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../components/Categories/Categories';
import PizzaList from '../components/PizzaList/PizzaList';
import Pagination from '../components/Pagination/Pagination';
import Sort from '../components/Sort/Sort';
import {
  selectFilter,
  setCategoryId,
  setCurrentPage,
} from '../redux/slices/filterSlice';

function Home() {
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
}

export default Home;
