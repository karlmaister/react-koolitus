import React, { useRef } from 'react';
import '../../css/OrderSummaryPopup.css';
import Payment from './cart/Payment';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const OrderSummaryPopup = ({ selectedOptions, onClose, getPrice, getTotalPrice, cart_sum }) => {

  const nameRef = useRef();
  const emailRef = useRef();

  const sendEmail = (e) => {

    const data = {
      "client_name": nameRef.current.value,
      "client_email": emailRef.current.value,
      "cart_sum":  getTotalPrice(),
    }

    emailjs.send('service_ew78t4p', 'template_d2a8yfi', data, 'BzlVLHD4O0_feXKUB')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <div className="order-summary-popup">
      <div className="order-summary-popup-content">
        <h3>Order Summary</h3>
        <ul>
                {selectedOptions.format && (
                  <li> Format {selectedOptions.format} - {getPrice(selectedOptions.format)} EUR</li>
                )}{selectedOptions.animation && (
                  <>
                    <li> Animation {selectedOptions.animation} - {getPrice(selectedOptions.animation)} EUR</li>
                    <li> Video length {selectedOptions.videoLength} sek - {getPrice(selectedOptions.videoLength)} EUR</li>
                  </>
                )}
                {selectedOptions.logoDesign && <li>Logo Design {getPrice('logoDesign')} EUR</li>}
                {selectedOptions.footageLink && (
                  <li>Footage Link: {selectedOptions.footageLink}</li>
                )}
                {selectedOptions.needVideographer && <li>Need a Videographer {getPrice('needVideographer')} EUR</li>}
                {selectedOptions.soundDesign && <li>Sound Design {getPrice('soundDesign')} EUR</li>}
                {selectedOptions.voiceOver &&
                  <>
                    <li>Voice Over {getPrice('voiceOver')} EUR</li>
                    <li>Voice: {selectedOptions.voice}</li>
                    <li>Voice Style: {selectedOptions.voiceStyle}</li>
                  </>
                }
                {selectedOptions.language && <li>Language: {selectedOptions.language}</li>}
              </ul>
              <p>Price: {getTotalPrice()} EUR</p>
              <p>We will send you order confirmation and invoice to e-mail</p>
        <br />
<div className='order-summary-form'>
        <TextField inputRef={nameRef} label="Name" variant="outlined" /> <br />
        <TextField inputRef={emailRef} label="Email" variant="outlined" /> <br />
        </div>
        <button variant="contained" onClick={sendEmail}>Confirm order</button>
        <button onClick={onClose}>Back to change</button>

      </div>
    </div>
  );
};

export default OrderSummaryPopup;
