
import React from 'react'

function Avaleht() {

  const computers = JSON.parse(localStorage.getItem("laptops")) || [];

  function lisaOstukorvi(klikitudArvuti) {
    const cart = JSON.parse(localStorage.getItem("ostukorv")) || [];

    cart.push(klikitudArvuti);

    localStorage.setItem("ostukorv", JSON.stringify(cart));

  }



return (


  <div className='avaleht-text'>

    <div>Tere</div> <br /> <br />
    <div>Siin lehel saad sülearvutied vaadata ja lisada</div>
    <br />

    {computers.map(oneComputer =>
      <div>
        <div>Mark: {oneComputer.mark}</div>
        <div>Mudel: {oneComputer.mudel}</div>
        <div>Hind: {oneComputer.maksumus} €</div>
        <button onClick={() => lisaOstukorvi(oneComputer)}>Lisa ostukorvi</button>
      </div>)}
  </div>


)
    }

export default Avaleht
