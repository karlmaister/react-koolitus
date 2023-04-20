import React from 'react'
import productsFromFile from '../../data/products.json'
import { useState, useParams, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';


function MaintainProducts() {
  

  const { t, i18n } = useTranslation();

  const updateLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language",newLanguage);
  }
  
  const [products, setProducts] = useState(productsFromFile);
  const searchRef = useRef();

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
