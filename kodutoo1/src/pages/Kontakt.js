import React from 'react'
import { useState } from 'react';

function Kontakt() {
    const [linn, määraLinn] = useState('Tallinn')
    const [telefon, määraTelefon] = useState("5512345");
    const [email, määraEmail] = useState("bla@baa.com");
    const [ingliseKeelne, määraKeel] = useState("ei")

    function määraBla() 
    {
        määraLinn("London")
        määraTelefon("12312412")
        määraEmail("london@london.com")
        määraKeel("jah")

    }



  return (
    <div>

    <div>{linn}</div>
    <div>{telefon}</div>
    <div>{email}</div>
    <button onClick={() => määraBla()}>Muuda inglise keelseks</button>
    {ingliseKeelne === "jah" && <div>Leht on inglise keeles</div>}
      
    </div>
  )
}

export default Kontakt
