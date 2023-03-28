import React, {useState} from 'react'

function Meist() {
    const [aadress, uuendaAadressi] = useState(localStorage.getItem("aadress") || "");
    const email = localStorage.getItem("email") || "";
    const [telefon, uuendaTelefon] = useState(localStorage.getItem("telefon") || "");
    const [naitaEmaili, uuendaNaitaEmaili] = useState(false);


  return (
    <div>
      <div>Meie aadress:
        {aadress}
        <button onClick={() => uuendaAadressi(aadress.toUpperCase())}>Suurteks tähtedeks</button>
        <button onClick={() => uuendaAadressi(aadress.toLowerCase())}>Väikesteks tähtedeks</button>
        </div>
      <div>Meie email: 
       {naitaEmaili === false && <button onClick={() => uuendaNaitaEmaili(true)}>Näita e-maili </button>}
        {naitaEmaili === true && <span className={email.endsWith("ee") ? "kuld" : undefined}>{email}</span>}
        </div>
      <div>Meie telefon:
        {telefon}
        {telefon.startsWith("+372") === false &&
         <button onClick={() => uuendaTelefon("+372" + telefon)}>Lisa suunakood</button>}  
      </div>
    </div>
  )
}

export default Meist
