import Items from './components/Items';
import Header from './components/Header';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  return (
    <div className="grid gap-4 max-w-screen-xl mx-auto pt-4 pb-4 p-1">
      <Header />
      <div className="flex place-content-between">
        <Search />
        <Filter />
      </div>
      <Items />
    </div>
  );
}

export default App;
