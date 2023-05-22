import React from 'react';
import '../../css/OrderSummaryPopup.css';
import Payment from './cart/Payment';

const OrderSummaryPopup = ({ selectedOptions, onClose, getPrice, getTotalPrice }) => {


  return (
    <div className="order-summary-popup">
      <div className="order-summary-popup-content">
        <h3>Order Summary</h3>
        <ul>
          {selectedOptions.format && (
            <li>
              Format: {selectedOptions.format} - {getPrice(selectedOptions.format)} EUR
            </li>
          )}
           {selectedOptions.animation && (
            <li>
              Format: {selectedOptions.animation} - {getPrice(selectedOptions.animation)} EUR
            </li>
          )}
          {selectedOptions.logoDesign && (
            <li>Logo Design - {getPrice('logoDesign')} EUR</li>
          )}
          {selectedOptions.footageLink && <li>Footage Link: {selectedOptions.footageLink}</li>}
          {selectedOptions.needVideographer && (
            <li>Need a Videographer - {getPrice('needVideographer')} EUR</li>
          )}
          {selectedOptions.soundDesign && (
            <li>Sound Design - {getPrice('soundDesign')} EUR</li>
          )}
          {selectedOptions.voiceOver && <li>Voice Over - {getPrice('voiceOver')} EUR</li>}
          {selectedOptions.language && <li>Language: {selectedOptions.language}</li>}
        </ul>
        Total price {getTotalPrice()} €
<br />
        Order is submitted after payment
        <Payment sum={getTotalPrice()} />

        
        <button onClick={onClose}>Back to change</button>

      </div>
    </div>
  );
};

export default OrderSummaryPopup;
