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

  return (
    <>
      <Categories
        activeCategory={activeCategory}
        onChangeCategory={(i) => setActiveCategory(i)}
        sortType={sortType}
        onChangeSort={(i) => setSortType(i)}
      />
      <PizzaList
        searchValue={searchValue}
        activeCategory={activeCategory}
        sortType={sortType}
      />
      <Pagination />
    </>
  );
}

export default Home;
