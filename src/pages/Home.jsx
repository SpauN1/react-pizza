import React, { useState } from 'react';

import Categories from '../components/Categories/Categories';
import PizzaList from '../components/PizzaList/PizzaList';
import Pagination from '../components/Pagination/Pagination';

function Home({ searchValue }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Categories
        activeCategory={activeCategory}
        onChangeCategory={(i) => setActiveCategory(i)}
        sortType={sortType}
        onChangeSort={(i) => setSortType(i)}
      />
      <PizzaList
        currentPage={currentPage}
        searchValue={searchValue}
        activeCategory={activeCategory}
        sortType={sortType}
      />
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
}

export default Home;
