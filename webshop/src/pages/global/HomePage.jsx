import React from 'react'
import productsFromFile from "../../data/products.json"
import { useState, useRef } from 'react'
// import cartFromFile from '../../data/cart.json'
import { t } from 'i18next';
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import "../../css/HomePage.css"


function HomePage() {

  
  const searchRef = useRef();

  const [products, setProducts] = useState(productsFromFile);


  function filterByCategory() {
    const result = productsFromFile.filter(element => element.category.includes("motorcycle"));
    setProducts(result);
}
  

  function addToCart(clickedProduct) {
    const CartLs= JSON.parse(localStorage.getItem("cart")) || [];
    const index = CartLs.findIndex(e => e.product.id === clickedProduct.id);

    if (index >= 0) {
      CartLs[index].quantity =  CartLs[index].quantity + 1;
    } else {
      CartLs.push({"product": clickedProduct, "quantity": 1});
    }

    

    localStorage.setItem("cart", JSON.stringify(CartLs));

    toast(clickedProduct.name + " lisatud")
  }

  function resetFilters() {
    setProducts(productsFromFile);
  }

    function sorteeriAZ() {
      products.sort((a, b) => a.name.localeCompare(b.name));
      setProducts(products.slice())
    }
  
    function sorteeriZA() {
      products.sort((a, b) => b.name.localeCompare(a.name));
      setProducts(products.slice())
    }
  
    function sorteeriKasvav() {
      products.sort((a, b) => a.price - b.price);
      setProducts(products.slice())
    }
  
    function sorteeriKahanev() {
      products.sort((a, b) => b.price - a.price);
      setProducts(products.slice())
    }
  
    function searchFromProducts() {
      const result = productsFromFile.filter(e =>
         e.name.toLocaleLowerCase().includes(searchRef.current.value.toLocaleLowerCase()));
      setProducts(result)
    }



  return (
    <div>
      <input onChange={searchFromProducts} type="text" ref={searchRef} />
    <div>{products.length} tk </div>

      <div>
        <Button variant="secondary" onClick={sorteeriAZ}>{t("sort.sorteeriAZ")}</Button>
        <Button variant="secondary" onClick={sorteeriZA}>{t("sort.sorteeriZA")}</Button>
        <Button variant="secondary" onClick={sorteeriKasvav}>{t("sort.sorteeriKasvav")}</Button>
        <Button variant="secondary" onClick={sorteeriKahanev}>{t("sort.sorteeriKahanev")}</Button>
      </div>

      <Button variant="contained" onClick={filterByCategory}>{t("filter_motorcycle")}</Button>
      <Button  variant="contained" onClick={resetFilters}>Reset</Button>
     <div className="products">
     {products.map((element) =>
        <div className="home-product" key={element.id}>
          <Link to={"/single-product/" + element.id}>
          <img src={element.image}></img>
          <div>{element.name}</div>
          <div>{element.price}</div>
          </Link>
          <Button variant="contained" onClick={() => addToCart(element)}>{t("add_to_cart")}</Button>
        </div>

      )}
     </div>

<ToastContainer position='bottom-center'></ToastContainer>
    </div>
  )
}

export default HomePage
