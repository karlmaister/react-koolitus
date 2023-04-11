import React from 'react'
import productsFromFile from '../../data/products.json'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function MaintainProducts() {

  const [products, setProducts] = useState(productsFromFile);

  function deleteProduct() {
    // kstub 1 toode
    // mine ka kontrolli avaleelt kas kustus
    // refreshiga tuleb tagasi
  }

  // tee sort

  
  return (
    <div>
      {products.map(element =>
        <div key={element.id}>
          <img src={element.image}></img>
          <div>{element.id}</div> 
          <div>{element.image}</div> 
          <div>{element.name}</div> 
          <div>{element.price}</div> 
          <div>{element.description}</div> 
          <div>{element.category}</div> 
          <div>{element.active}</div>
          <Link to={"/admin/edit-product/" + element.id}>
          <button>Edit</button>
          </Link>
          <button>Delete</button>
        </div>
        
        )}
    </div>
  )
}

export default MaintainProducts
