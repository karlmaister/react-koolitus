import React from 'react'

function Ostukorv() {
  
    const cart = JSON.parse(localStorage.getItem("ostukorv")) || [];
  
    return (
    <div>
      
      {cart.map(oneComputer =>
      <div>
        <div>Mark: {oneComputer.mark}</div>
        <div>Mudel: {oneComputer.mudel}</div>
        <div>Hind: {oneComputer.maksumus} €</div>
        <button>Eemalda</button>
      </div>)}
    </div>
  )
}

export default Ostukorv
