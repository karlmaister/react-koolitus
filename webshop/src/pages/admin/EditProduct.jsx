import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
// import productsFromFile from '../../data/products.json'
import { useRef } from 'react';
import { useState } from 'react';
import config from '../../data/config.json'

function EditProduct() {

  const { id } = useParams();

  const [dbProducts, setDbProducts] = useState([]);
  

  useEffect(() => {
    fetch(config.productsDbUrl)
    .then(res => res.json())
    .then(json => {
      // setProducts(json || []);
      setDbProducts(json || []);
    })
  }, []);

  const found = dbProducts.find( element => element.id === Number(id) );

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const [idUnique, setIdUnique] = useState(true);

  function edit() {
    const index = dbProducts.findIndex(element => element.id === Number(id));

    const updateProduct = {
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.value.checked,
    };

    dbProducts[index] = updateProduct;
   
    fetch(config.productsDbUrl,  
      {"method": "PUT" , "body" : JSON.stringify(dbProducts)})
      .then(() => navigate("/admin/maintain-products"));
  }



  const checkIdUniqueness = () => {
    const index = dbProducts.findIndex(e => e.id === Number(idRef.current.value));

    if (index === -1) {
      setIdUnique(true)
    } else {
      setIdUnique(false)
    }
  }



  return (
    <div>

      { idUnique === false && <div>Inserted ID is not unique!</div>}
      {found !== undefined &&
  <div>
      <label> ID:</label>
      <input ref={idRef} onChange={checkIdUniqueness} type="number" defaultValue={found.id}/> <br />
      <label> Name:</label>
      <input ref={nameRef} type="text" defaultValue={found.name}/> <br />
      <label> Price:</label>
      <input ref={priceRef} type="number" defaultValue={found.price}/> <br />
      <label> Image:</label>
      <input ref={imageRef} type="text" defaultValue={found.image}/> <br />
      <label> Category:</label>
      <input ref={categoryRef} type="text" defaultValue={found.category}/> <br />
      <label> Description:</label>
      <input ref={descriptionRef} type="text" defaultValue={found.description}/> <br />
      <label> Active:</label>
      <input ref={activeRef} type="checkbox" defaultChecked={found.active}/> <br />
    <button disabled={idUnique === false} onClick={edit}>Edit</button> 
    </div>
}
{found === undefined && <div>Product not found</div>}
    </div>
  )
}

export default EditProduct
