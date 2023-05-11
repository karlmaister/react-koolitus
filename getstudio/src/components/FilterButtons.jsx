import Button from '@mui/material/Button';



function FilterButtons({ dbProducts, setProducts, products }) {

  function resetFilters() {
    setProducts(dbProducts);
  }

  function filterByCategory(categoryClicked) {
    const result = dbProducts.filter(element => element.category === categoryClicked);
    setProducts(result);
  }


  return (
    <div>

        {products.map(e => <Button  variant="contained" key = { e.productID } onClick = {() => filterByCategory(e.category)}>{e.category}</Button>)}
        <Button variant="contained" onClick={resetFilters}>Reset</Button>
    </div>
  )

}
export default FilterButtons
// props saab kasutada ka setProducts .props ette