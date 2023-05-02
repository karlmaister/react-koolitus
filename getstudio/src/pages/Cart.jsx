import React from 'react'
import { useState } from 'react'
// import cartFromFile from '../../data/cart.json'
import { t } from 'i18next';
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';
import styles from "../css/Cart.module.css"
import ParcelMachines from '../components/ParcelMachines';
import Payment from '../components/Payment'


function Cart() {

  const [cart, updateCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);


  function clearCart() {
    updateCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    toast("Cleared")
  }

  function deleteItem(qnr) {
    cart.splice(qnr, 1);
    updateCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    toast("Item removed")
  }

  function calcSum() {
    let sum = 0;
    cart.forEach(cartline => sum = sum + cartline.product.price * cartline.quantity);
    return sum.toFixed(2);
  }

  function increase(qnr) {
    cart[qnr].quantity = cart[qnr].quantity + 1;
    updateCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function decrease(qnr) {
    cart[qnr].quantity = cart[qnr].quantity - 1;
    if (cart[qnr].quantity <= 0) {
      deleteItem(qnr);
    }

    updateCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
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
        <div className={styles.product} key={element.product.id}>
          <img className={styles.image} src={element.product.image} alt=''></img>
          <div className={styles.name}>{element.product.name}</div>
          <div className={styles.price}>{element.product.price}</div>
          <div className={styles.quantity}>
            <img className={styles.button} onClick={() => increase(qnr)} src="/plus.png" alt=""></img>
            <div >{element.quantity}</div>
            <img className={styles.button} onClick={() => decrease(qnr)} src="/minus.png" alt=""></img>
          </div>
          <div className={styles.total}>{element.product.price * element.quantity.toFixed(2)}</div>
          <img  className={styles.button} onClick={() => deleteItem(qnr)}  src="/delete-button.png" alt=""></img>
        </div>

      )}
  
      <ParcelMachines/>
        <Payment sum={calcSum()}/>
     
      <ToastContainer position='bottom-center'></ToastContainer>
    </div>
  )
}


export default Cart
