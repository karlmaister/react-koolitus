import React from 'react'
import { ToastContainer } from 'react-toastify';
import FilterButtons from '../../components/home/FilterButtons';
import SortButtons from '../../components/home/SortButtons';
import Product from '../../components/home/Product';
import styles from "../../css/HomePage.module.css"
import { useState, useEffect } from 'react'
import config from '../../data/config.json'
import { Spinner } from 'react-bootstrap';
import CarouselGallery from '../../components/home/CarouselGallery';




function HomePage() {


  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [categories, setcCategories] = useState([]);


  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
        .then(json => setcCategories(json || []))
}, []);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setDbProducts(json || []);
        setLoading(false);
      })
  }, []);

  if(isLoading === true) {
    return <Spinner />
  }


  return (
    <div>
      <CarouselGallery/>
      <FilterButtons
        dbProducts={dbProducts}
        setProducts={setProducts}
        categories={categories}
      />
      <SortButtons products={products}
        setProducts={setProducts} />

      <div>Tooteid kokku: {products.length} tk </div>
      <div>
        <div className={styles.products}>
          {products.map((element) =>
            <Product key={element.id} element={element} />
          )}
        </div>
        <ToastContainer position='bottom-center'></ToastContainer>
      </div>
    </div>
  )
}
export default HomePage
