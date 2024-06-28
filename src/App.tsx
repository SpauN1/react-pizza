import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CartEmpty } from './components';
import { MainLayout } from './layouts/MainLayout';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

import '../src/style/style.scss';

const Cart = lazy(
  () => import(/* webpackChunkName: "Cart" */ './pages/Cart/Cart')
);
const FullPizza = lazy(
  () =>
    import(/* webpackChunkName: "FullPizza" */ './pages/FullPizza/FullPizza')
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Идет загрузка...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="pizza/:id" element={<FullPizza />} />
            <Route path="cartempty" element={<CartEmpty />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
