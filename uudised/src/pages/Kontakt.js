import React from 'react'
import { useState } from 'react';

function Kontakt() {
  const [n2itaTel, muudaN2itaTel] = useState(false);
  const [n2itaTelYlemiste, muudaN2itaTelYlemiste] = useState(false);
  const [n2itaTelSuvaline, muudaN2itaTelSuvaline] = useState(false);



  return (
    <div>
      <div> see on kontakt, nähtav localhost:3000/kontakt aadressil </div>
        <div>Võta meiega ühendust</div>
        <br/>
        <div className={n2itaTel === true ? "valitud" : undefined} onClick={() => muudaN2itaTel(!n2itaTel)}>Krisiine keskus</div>
        {n2itaTel && <div className='valitud'>+37588964333</div>}
        <div className={n2itaTel === true ? "valitud" : undefined}>Endla 54</div>
        <br />
        <div className={n2itaTelYlemiste === true ? "valitud" : undefined} onClick={() => muudaN2itaTelYlemiste(!n2itaTelYlemiste)}>Ülemiste keskus</div>
        {n2itaTelYlemiste && <div className='valitud'>+37588964222</div>}
        <div className={n2itaTelYlemiste === true ? "valitud" : undefined}>Pärnu mnt 543</div>
        <br />
        <div className={n2itaTelSuvaline === true ? "valitud" : undefined} onClick={() => muudaN2itaTelSuvaline(!n2itaTelSuvaline)}>Suvaline keskus</div>
        {n2itaTelSuvaline && <div className='valitud'>+37588964111</div>}
        <div className={n2itaTelSuvaline === true ? "valitud" : undefined}>Tallinna 54</div>
        <br />

    </div>
  )
}

export default Kontakt
