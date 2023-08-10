import Items from './components/Items';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="grid gap-2 max-w-screen-xl mx-auto pt-4 pb-4">
      <Header />
      <Items />
    </div>
  );
}

export default App;
