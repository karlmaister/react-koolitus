import React from 'react'
import productsFromFile from "../../data/products.json"
import { useState } from 'react'

function HomePage() {

  const [products, setProducts] = useState(productsFromFile);


  return (
    <div>
      {products.map(element =>
        <div key={element.id}>
          <img src={element.image}></img>
          <div>{element.name}</div>
          <div>{element.price}</div>

          <button>Add to Cart</button>
        </div>
        
        )}
    </div>
  )
}

export default HomePage
