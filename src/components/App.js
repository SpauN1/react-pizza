import Header from './Header/Header';
import Categories from './Categories/Categories';
import PizzaList from './PizzaList/PizzaList';

import '../style/style.scss';

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <Categories />
        <PizzaList />
      </div>
    </div>
  );
}

export default App;
