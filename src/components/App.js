import Header from './Header/Header';
import Categories from './Categories/Categories';

import '../style/style.scss';

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <Categories />
      </div>
    </div>
  );
}

export default App;
