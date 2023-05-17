import React, { useContext } from 'react'
import { useState } from 'react'
// import cartFromFile from '../../data/cart.json'
import { t } from 'i18next';
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';
import styles from "../css/Cart.module.css"
import Payment from '../pages/components/cart/Payment';
import { CartSumContext } from './components/CartSumContext';


function Cart() {

  const [cart, updateCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const { setCartSum } = useContext(CartSumContext)


  function clearCart() {
    updateCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    toast("Cleared")
    setCartSum("0.00")
  }

  function deleteItem(qnr) {
    cart.splice(qnr, 1);
    updateCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    toast("Item removed")
    setCartSum(calcSum())
  }

  function calcSum() {
    let sum = 0;
    cart.forEach(cartline => sum = sum + cartline.product.price * cartline.quantity);
    return sum.toFixed(2);
  }


  return (
    <div>

    {cart.length > 0 && <Button variant="contained" onClick={clearCart}>{t("clearcart")}</Button>}
    {cart.length > 0 &&
      <div className={styles.totalsection}>
        {cart.length > 0 && <div>{t("total")}: {calcSum()} € </div>}
        {cart.length === 0 && <div>{t("empty")} </div>}
      </div>}
    {cart.map((element, qnr) =>
      <div className={styles.product_wrapper}>
        <div className={styles.product} key={element.product.id}>  
          <div className={styles.name}>{element.product.name}</div>
          <div className={styles.price}>{element.product.price} € </div>
          <img className={styles.button} onClick={() => deleteItem(qnr)} src="/delete-button.png" alt=""></img>
        </div>
       
      </div>

    )}

    {cart.length > 0 &&
      <>
        <Payment sum={calcSum()} />
      </>}
    <ToastContainer position='bottom-center'></ToastContainer>
  </div>
  )
      }


export default Cart
