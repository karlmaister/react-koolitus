import React, { useEffect } from 'react'
// import productsFromFile from '../../data/products.json'
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import config from '../../data/config.json'
import { t } from 'i18next';



function MaintainProducts() {

  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);

  const searchRef = useRef();

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setDbProducts(json || []);
      })
  }, []);


  function deleteProduct(productId) {
    const index = dbProducts.findIndex(element => element.id === productId);
    dbProducts.splice(index, 1);
    setProducts(dbProducts.slice());
    fetch(config.productsDbUrl,
      { "method": "PUT", "body": JSON.stringify(dbProducts) })
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
    const result = dbProducts.filter(e =>
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
      <table>
        <tr>
          <th>Image</th>
          <th>ID</th>
          <th>name</th>
          <th>price</th>
          <th>description</th>
          <th>category</th>
          <th>Actions</th>
        </tr>{products.map(element =>
          <tr key={element.id} className={element.active === true ? "active-product" : "inactive-product"}>
            <td><img className="image" src={element.image} alt=""></img></td>
            <td> {element.id}</td>
            <td> {element.name}</td>
            <td> {element.price} €</td>
            <td> {element.description}</td>
            <td>  {element.category}</td>
            <td><Link to={"/admin/edit-product/" + element.id}>
              <button>Edit</button>
            </Link>
            <button onClick={() => deleteProduct(element.id)}>Delete</button>
          </td>
          </tr>
      )}
    </table>
    </div >
  )
}

export default MaintainProducts
