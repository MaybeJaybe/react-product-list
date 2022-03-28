import logo from './logo.svg';
import data, { categoriesWithCounts, namesAndCategories } from './data';
import './App.css';
import { names } from 'debug';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {namesAndCategories.map(obj => {
          return (
            <button>
              {obj.name}
            </button>
          )
        })}
      </header>
    </div>
  );
}

export default App;
