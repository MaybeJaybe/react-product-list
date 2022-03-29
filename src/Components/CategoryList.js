import { namesAndCategories } from '../data';
import './CategoryList.css';

function CategoryList(props) {
  const { category, onClick } = props

  return (
    <div className="CategoryList">
      {namesAndCategories.map(obj => {
        const className = obj.name === category ? 'selected' : ''
        return (
          <button 
            className={className} 
            onClick={() => onClick(obj.name)}
            >
              {obj.name} 
              <span> ({obj.count}) </span>
          </button>
        )
      })}
    </div>
  )
}
export default CategoryList