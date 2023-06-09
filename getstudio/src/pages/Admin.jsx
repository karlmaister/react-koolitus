import React from 'react'
// import productsFromFile from "../../data/products.json"
import { useState, useRef, useEffect } from 'react'
// import cartFromFile from '../../data/cart.json'
import { t } from 'i18next';
import { ToastContainer, toast } from 'react-toastify';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
import config from '../data/config.json'


function AddProduct() {

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const [dbProducts, setDbProducts] = useState([]);

  const [idUnique, setIdUnique] = useState(true);

  useEffect(() => {
    fetch(config.productsDB)
    .then(res => res.json())
    .then(json => {
      // setProducts(json || []);
      setDbProducts(json || []);
    })
  }, []);

  function add() {

    const addProduct = {
      "productID": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "imgURL": imageRef.current.value,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.value.checked
    }

    dbProducts.push(addProduct);
    toast(t("product_added"));
    fetch(config.productsDB,
      {"method": "PUT" , "body" : JSON.stringify(dbProducts)})

  }

  const checkIdUniqueness = () => {
    const index = dbProducts.findIndex(e => e.id === Number(idRef.current.value));

    if (index === -1) {
      setIdUnique(true)

    } else {
      setIdUnique(false)
      toast("Toote ID pole unikaalne");
    }

  }

  return (
    <div>

      <label> ID:</label>
      <input ref={idRef} onChange={checkIdUniqueness} type="number" /> <br />
      <label> {t("name")}:</label>
      <input ref={nameRef} type="text" /> <br />
      <label> {t("price")}:</label>
      <input ref={priceRef} type="number" /> <br />
      <label> {t("image")}:</label>
      <input ref={imageRef} type="text" /> <br />
      <label> {t("category")}:</label>
      <input ref={categoryRef} type="text" /> <br />
      <label> {t("description")}:</label>
      <input ref={descriptionRef} type="text" /> <br />
      <label> {t("active")}:</label>
      <input ref={activeRef} type="checkbox" /> <br />
      <button disabled={idUnique === false} onClick={add}>{t("add_product")}</button>
      {idUnique === false && <div>{t("id_error")}</div>}
      <ToastContainer position='top-center'></ToastContainer>
    </div>
  )
}
export default AddProduct