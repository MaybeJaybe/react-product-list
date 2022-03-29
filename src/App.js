import data, { allCategories, uniqueCategories, categoriesWithCounts, namesAndCategories } from './data';
import { useState } from 'react';
import CategoryList from './Components/CategoryList';
import ProductList from './Components/ProductList';
import './App.css';

function App() {
  const[category, setCategory] = useState('All')

  return (
    <div className="App">
      <h1>Shop Products</h1>
      <p>Select Categories: ({uniqueCategories.length})</p>

      <CategoryList 
        category={category} 
        onClick={newCategory => setCategory(newCategory)}
      />

      <ProductList 
      category={category}
      />
    </div>
  );
}
export default App;
