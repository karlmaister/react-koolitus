import React from 'react'
import { useState, useEffect } from 'react'
import config from '../../data/config.json'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap';

function SingleProduct() {


  const [dbProducts, setDbProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setDbProducts(json || []);
        setLoading(false);
      })
  }, []);

  const { id } = useParams();
  const found = dbProducts.find(e => e.id === Number(id));

  if (isLoading === true) {
    return <Spinner variant="success" animation="grow" />
  }

  return (
    <div>
      {found !== undefined &&
        <div>
          <img src={found.image} alt="" />
          <div>ID:{id}</div>
          <div> Name: {found.name} </div>
          <div> Price: {found.price} </div>
          <div> Description: {found.description} </div>
          <div> Category: {found.category} </div>
        </div>}
      {found === undefined && <div>Not found</div>}
    </div>
  )
}

export default SingleProduct
