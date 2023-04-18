import React from 'react'
import productsFromFile from '../../data/products.json'
import { useState, useParams, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function MaintainProducts() {
  
  
  const [products, setProducts] = useState(productsFromFile);

  function deleteProduct(index) {
    products.splice(index, 1);
    setProducts(productsFromFile.slice());
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

  return (
    <div>
      <div>
        <Button variant="secondary" onClick={sorteeriAZ}>{t("sorteeriAZ")}</Button>
        <Button variant="secondary" onClick={sorteeriZA}>{t("sorteeriZA")}</Button>
        <Button variant="secondary" onClick={sorteeriKasvav}>{t("sorteeriKasvav")}</Button>
        <Button variant="secondary" onClick={sorteeriKahanev}>{t("sorteeriKahanev")}</Button>
      </div>
      {products.map((element, index) =>
        <div key={element.id}>
          <img src={element.image}></img>
          <div>{element.id}</div>
          <div>{element.name}</div>
          <div>{element.price} €</div>
          <div>{element.description}</div>
          <div>{element.category}</div>
          <div>{element.active}</div>
          <Link to={"/admin/edit-product/" + element.id}>
            <button>Edit</button>
          </Link>
          <button onClick={deleteProduct}>Delete</button>
        </div>

      )}
    </div>
  )
}

export default MaintainProducts
