import Button from '@mui/material/Button';

function FilterButtons({ dbProducts, setProducts, categories }) {

function resetFilters() {
  setProducts(dbProducts);
}

function filterByCategory(categoryClicked) {
  const result = dbProducts.filter(element => element.category === categoryClicked);
  setProducts(result);
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