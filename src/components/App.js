import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart/Cart';
import CartEmpty from './CartEmpty/CartEmpty';
import NotFound from '../pages/NotFound';
import FullPizza from '../pages/FullPizza/FullPizza';
import MainLayout from '../layouts/MainLayout';

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
