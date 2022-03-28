import data, { categoriesWithCounts, namesAndCategories } from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {namesAndCategories.map(obj => {
          return (
            <div className="Category-buttons">
              <button>
                {obj.name}
              </button>
            </div>
          )
        })}
        <div className="Products">
          {data.map(obj => {
            return (
              <div className="Product">
                <h1>{obj.name}</h1>
                <h2>{obj.category}</h2>
                <h3>{obj.price}</h3>
              </div>
            )
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
