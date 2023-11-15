import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import Home from '../pages/Home';
import Cart from '../pages/Cart/Cart';
import CartEmpty from './CartEmpty/CartEmpty';

import NotFound from '../pages/NotFound';

import '../style/style.scss';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="cartempty" element={<CartEmpty />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
