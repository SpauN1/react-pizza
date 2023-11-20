import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../components/Categories/Categories';
import PizzaList from '../components/PizzaList/PizzaList';
import Pagination from '../components/Pagination/Pagination';
import Sort from '../components/Sort/Sort';
import { SortContext } from '../context/context';
import { setCategoryId } from '../redux/slices/filterSlice';

function Home() {
  const categoryId = useSelector((state) => state.filterSlice.categoryId);
  const dispatch = useDispatch();

  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  return (
    <>
      <SortContext.Provider value={{ sortType, setSortType }}>
        <div className="content__top">
          <Categories
            categoryId={categoryId}
            onChangeCategory={onChangeCategory}
          />
          <Sort />
        </div>

        <PizzaList currentPage={currentPage} categoryId={categoryId} />
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </SortContext.Provider>
    </>
  );
}

export default Home;
