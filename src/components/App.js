import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import Home from '../pages/Home';
import Cart from '../pages/Cart/Cart';
import CartEmpty from './CartEmpty/CartEmpty';
import NotFound from '../pages/NotFound';
import { SearchContext } from '../context/context';

import '../style/style.scss';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <BrowserRouter>
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="cartempty" element={<CartEmpty />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
