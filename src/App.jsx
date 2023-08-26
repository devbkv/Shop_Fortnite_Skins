import Items from './components/Items';
import Header from './components/Header';
import Search from './components/Search';
import Filter from './components/Filter';
import Modal from './components/Modal';

function App() {
  return (
    <div>
      <div>
        <Modal>
          <p>Какие-то данные</p>
        </Modal>
      </div>
      <div className="grid gap-4 max-w-screen-xl mx-auto pt-4 pb-4 p-1">
        <Header />
        <div className="flex place-content-between flex-wrap">
          <Filter />
          <Search />
        </div>
        <Items />
      </div>
    </div>
  );
}

export default App;
