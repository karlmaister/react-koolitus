import Button from '@mui/material/Button';

function FilterButtons({ dbProducts, setFilteredProducts, categories, setProducts, setActivePage }) {

function resetFilters() {
  setFilteredProducts(dbProducts.slice());
  setProducts(dbProducts.slice(0,20));
  setActivePage(1);
}

function filterByCategory(categoryClicked) {
  const result = dbProducts.filter(element => element.category === categoryClicked);
  setFilteredProducts(result);
  setProducts(result.slice(0,20));
  setActivePage(1);
}


return (
  <div>

  {categories.map(e => <Button key={e.name} onClick={() => filterByCategory(e.name)}>{e.name}</Button>)}
    <Button variant="contained" onClick={resetFilters}>Reset</Button>
  </div>
)

}
export default FilterButtons
// props saab kasutada ka setProducts .props ette