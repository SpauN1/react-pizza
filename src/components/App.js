import Header from './Header/Header';
import Categories from './Categories/Categories';
import PizzaList from './PizzaList/PizzaList';

import '../style/style.scss';
import CartEmpty from './CartEmpty/CartEmpty';

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Categories />
          <PizzaList />
          {/* <CartEmpty /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
