import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



function OrderEmail({ totalSum, cartProducts }) {

  const nameRef = useRef();
  const emailRef = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

   

    const orderProducts =
      "<ol>" +
      cartProducts.map((element) => `
        <li>${element.product.name}
          <img src=${element.product.image}></img>
        </li>`).join("") +
      "</ol>";

      const data = {
        "client_name": nameRef.current.value,
        "client_email": emailRef.current.value,
        "cart_sum": totalSum,
        "order_products": orderProducts
      }

    emailjs.send('service_3j24i3r', 'template_a0xk3uk', data, 'ngFHr753Np5XpuB1p')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <div>
      <TextField inputRef={nameRef} label="Name" variant="outlined" /> <br />
      <TextField inputRef={emailRef} label="Email" variant="outlined" /> <br />
      <Button variant="contained" onClick={sendEmail}>SEND</Button>

    </div>
  )
}

export default OrderEmail
