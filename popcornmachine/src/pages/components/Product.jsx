import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import styles from "../../css/HomePage.module.css"
import { t } from 'i18next';
import { toast } from 'react-toastify';
import { CartSumContext } from '../components/CartSumContext';

function Product({ element }) {

  const {setCartSum} = useContext(CartSumContext);


  function addToCart(clickedProduct) {
    const CartLs = JSON.parse(localStorage.getItem("cart")) || [];
    const index = CartLs.findIndex(e => e.product.name === clickedProduct.name);

    if (index >= 0) {
      CartLs[index].quantity = CartLs[index].quantity + 1;
    } else {
      CartLs.push({ "product": clickedProduct, "quantity": 1 });
    }

    let sum = 0;
    CartLs.forEach(cartline => sum = sum + cartline.product.price * cartline.quantity);
    setCartSum( sum.toFixed(2))

    localStorage.setItem("cart", JSON.stringify(CartLs));

    toast(clickedProduct.name + " lisatud")
  }

  return (
    <div>
      

        <div className={styles["home-product"]}>
            <div>{element.name}</div>
            <div>{element.price}</div>
          <Button variant="contained" onClick={() => addToCart(element)}>{t("add_to_cart")}</Button>

        </div>
      </div>

  )
}
export default Product