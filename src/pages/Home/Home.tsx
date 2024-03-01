import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, Pagination, PizzaList, SortPopup } from '../../components';
import { selectFilter } from '../../redux/filter/selectors';
import { setCategoryId, setCurrentPage } from '../../redux/filter/slice';

export const Home: FC = () => {
  const dispatch = useDispatch();
  const { categoryId, currentPage } = useSelector(selectFilter);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <>
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          onChangeCategory={onChangeCategory}
        />
        <SortPopup />
      </div>
      <PizzaList currentPage={currentPage} categoryId={categoryId} />
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
};
