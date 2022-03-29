import data from '../data';
import './ProductList.css';

function ProductList(props) {
  const { category } = props
  return (
    <div className="ProductList">
      {data.filter(obj => obj.category === category || category === 'All').map(obj => {
        return (
          <div>
            <h2>{obj.name}</h2>
            <h3>{obj.description}</h3>
            <small>Category: {obj.category}</small>
            <p>{obj.price}</p>
            
          </div>
        )
      })}
    </div>
  )
}
export default ProductList