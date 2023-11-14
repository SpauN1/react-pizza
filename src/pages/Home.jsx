import React, { useState } from 'react';

import Categories from '../components/Categories/Categories';
import PizzaList from '../components/PizzaList/PizzaList';

function Home() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <>
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={(i) => setActiveCategory(i)}
      />
      <PizzaList activeCategory={activeCategory}/>
    </>
  );
}

export default Home;
