import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CartEmpty from './CartEmpty/CartEmpty';
import MainLayout from '../layouts/MainLayout';
import { Cart, FullPizza, Home, NotFound } from '../pages';

import '../style/style.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="pizza/:id" element={<FullPizza />} />
          <Route path="cartempty" element={<CartEmpty />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
