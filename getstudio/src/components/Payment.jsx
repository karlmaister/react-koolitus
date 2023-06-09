import React from 'react'
import { t } from 'i18next';



function Payment(props) {

    function pay() {
        const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    
        const paymentData = {
          "api_username": "e36eb40f5ec87fa2",
          "account_name": "EUR3D1",
          "amount": props.sum,
          "order_reference": Math.random() * 9999999,
          "nonce": "a9b7f7e7943" + Math.random() * 9999999,
          "timestamp": new Date(),
          "customer_url": "https://webshop-karl.web.app"
      };
    
        const paymentHeaders = {
          "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
          "Content-Type":"application/json"
        };
    
        fetch(url, {"method": "POST", "body": JSON.stringify(paymentData), "headers": paymentHeaders})
        .then(res => res.json())
        .then(json => window.location.href = json.payment_link);
      }

  return (
    <div>
      <button onClick={pay}>{t("pay")}</button>
    </div>
  )
}

export default Payment
