import React from 'react'
// import productsFromFile from "../../data/products.json"
import { useState, useRef, useEffect } from 'react'
// import cartFromFile from '../../data/cart.json'
import { t } from 'i18next';
import { ToastContainer, toast } from 'react-toastify';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
import config from '../database/config.json'


function Admin() {


  const nameRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const [dbProducts, setDbProducts] = useState([]);


  useEffect(() => {
    fetch(config.productsDB)
      .then(res => res.json())
      .then(json => {
        // setProducts(json || []);
        setDbProducts(json || []);
      })
  }, []);

  function add() {


    if (nameRef.current.value === "") {
      toast("name not filled")
      return;
    }
    if (priceRef.current.value === "") {
      toast("price not filled")
      return;
    }
    if (/^\d+$/.test(priceRef.current.value) === false) {
      toast("price only in numbers")
      return;
    }
    if (descriptionRef.current.value === "") {
      toast("description not filled")
      return;
    }

    const addProduct = {

      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "active": activeRef.current.value.checked,
    }

    dbProducts.push(addProduct);
    toast(t("product_added"));
    fetch(config.productsDB,
      { "method": "PUT", "body": JSON.stringify(dbProducts) })
    nameRef.current.value = "";
    priceRef.current.value = "";
    descriptionRef.current.value = "";
    activeRef.current.checked = false;

  }

  return (
    <div>
      <label> {t("name")}:</label>
      <input ref={nameRef} type="text" /> <br />
      <label> {t("price")}:</label>
      <input ref={priceRef} type="number" /> <br />
      <label> {t("description")}:</label>
      <input ref={descriptionRef} type="text" /> <br />
      <label> {t("active")}:</label>
      <input ref={activeRef} type="checkbox" /> <br />
      <button onClick={add}>{t("add_product")}</button>

      <ToastContainer position='top-center'></ToastContainer>
    </div>
  )
}
export default Admin