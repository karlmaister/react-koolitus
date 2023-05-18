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
import Pagination from 'react-bootstrap/Pagination';



function HomePage() {


  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [categories, setcCategories] = useState([]);
  const [activePage, setActivePage] = useState(1);
  // const [pages, setPages] = useState([]);

  const pages = [];
  for (let number = 1; number <= Math.ceil(filteredProducts.length / 20); number++) {
    pages.push(number);
  }

  function changePage(newPage) {
    setActivePage(newPage);
    setProducts(filteredProducts.slice(20 * newPage - 20, 20 * newPage));

  }

  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setcCategories(json || []))
  }, []);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json.slice(0, 20) || []);
        setFilteredProducts(json || []);
        setDbProducts(json || []);
        setLoading(false);
      })
  }, []);

  if (isLoading === true) {
    return <Spinner />
  }


  return (
    <div>

      <CarouselGallery />
      <FilterButtons
        dbProducts={dbProducts}
        setFilteredProducts={setFilteredProducts}
        categories={categories}
        setProducts={setProducts}
        setActivePage={setActivePage}
      />
      <div>Showing products: {products.length < 20 ? filteredProducts.length : products.length * activePage}/{filteredProducts.length}</div>
      <Pagination>{pages.map(number => <Pagination.Item onClick={() => changePage(number)} key={number} active={number === activePage}>
        {number}
      </Pagination.Item>)}</Pagination>
      <SortButtons
        page={activePage}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
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
