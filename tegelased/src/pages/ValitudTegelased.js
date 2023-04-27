import React, { useState } from 'react'

function ValitudTegelased() {

  const [valitudTegelased, setValitudTegelased] = useState(
    JSON.parse(localStorage.getItem("valitudTegelased")) || []  );

    function eemaldaTegelane(index) {
      valitudTegelased.splice(index,1);
      setValitudTegelased(valitudTegelased.slice());
      localStorage.setItem("valitudTegelased",JSON.stringify(valitudTegelased))
    }

    function kustutakõik() {
      setValitudTegelased([]);
      localStorage.setItem("valitudTegelased",JSON.stringify([]))
    }

  return (
    <div>
      {valitudTegelased.length === 0 && <div>Tegelasi pole valitud veel</div>}
      {valitudTegelased.length !== 0 && <div>Valitud on {valitudTegelased.length} tegelast</div>}

      {valitudTegelased.map((tegelane,index) =>
      <div>
         <div> {tegelane.nimi} </div>
         <div> {tegelane.perenimi} </div>
         <div> {tegelane.elukoht} </div>
         <div> {tegelane.vanus} </div>
         <button onClick={() => eemaldaTegelane(index)}>Eemalda</button>
         </div>
        )}
         <button onClick={kustutakõik}>Eemalda kõik</button>
    </div>
  )
}

export default ValitudTegelased
