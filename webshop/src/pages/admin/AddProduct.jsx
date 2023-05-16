import React from 'react'
// import productsFromFile from "../../data/products.json"
import { useState, useRef, useEffect } from 'react'
// import cartFromFile from '../../data/cart.json'
import { t } from 'i18next';
import { ToastContainer, toast } from 'react-toastify';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
import config from '../../data/config.json'


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
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []));
  }, []);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        // setProducts(json || []);
        setDbProducts(json || []);
      })
  }, []);

  function add() {

    if (idRef.current.value === "") {
      toast("id not filled")
      return;
    }
    if (/^\d+$/.test(idRef.current.value) === false) {
      toast("id not filled")
      return;
    }

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
    if (categoryRef.current.value === "") {
      toast("Category not selected")
      return;
    }

    const addProduct = {
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.value.checked,
    }

    dbProducts.push(addProduct);
    toast(t("product_added"));
    fetch(config.productsDbUrl,
      { "method": "PUT", "body": JSON.stringify(dbProducts) })
    idRef.current.value = "";
    nameRef.current.value = "";
    priceRef.current.value = "";
    imageRef.current.value = "";
    categoryRef.current.value = "";
    descriptionRef.current.value = "";
    activeRef.current.checked = false;

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
      {/* <input ref={categoryRef} type="text" /> <br /> */}
      <select ref={categoryRef}>
      <option value="">vali kategooria!</option>
        {categories.map(category => <option key={category.name}>{category.name}</option>)}
        </select> <br />
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