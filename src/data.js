import data from './data.json';

// get list of all categories
const allCategories = data.map(obj => obj.category);
// make categories list a list of unique values
const uniqueCategories = Array.from(new Set(allCategories))
// make object whose keys are the names of categories
// and whose values are the number of times that category appears
const categoriesWithCounts = allCategories.reduce((obj, cat) => {
  // check if cat exists
  if (obj[cat] !== undefined) {
    // this category exists on the object
    obj[cat] += 1
  } else {
    // this category does not exist
    obj[cat] = 1
  }
  return obj
}, {})
// use reduce to make an array of objects that have name and count
const namesAndCategories = uniqueCategories.map(name => {
  // return obj here with name and count
  return {name, count: categoriesWithCounts[name]}
})

namesAndCategories.push({name: 'All', count: data.length})

export default data
export { allCategories, uniqueCategories, categoriesWithCounts, namesAndCategories }