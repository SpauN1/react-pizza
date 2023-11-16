import React, { useState } from 'react';

import Categories from '../components/Categories/Categories';
import PizzaList from '../components/PizzaList/PizzaList';
import Pagination from '../components/Pagination/Pagination';
import { SortContext } from '../context/context';

function Home() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <SortContext.Provider value={{ sortType, setSortType }}>
        <Categories
          activeCategory={activeCategory}
          onChangeCategory={(i) => setActiveCategory(i)}
        />
        <PizzaList currentPage={currentPage} activeCategory={activeCategory} />
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </SortContext.Provider>
    </>
  );
}

export default Home;
