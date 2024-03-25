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
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route
            path="cart"
            element={
              <Suspense fallback={<div>Идет загрузка...</div>}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path="pizza/:id"
            element={
              <Suspense fallback={<div>Идет загрузка...</div>}>
                <FullPizza />
              </Suspense>
            }
          />
          <Route path="cartempty" element={<CartEmpty />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
