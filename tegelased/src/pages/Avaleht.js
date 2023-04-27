import React, { useState } from 'react'

function Avaleht() {

  const [klikitud, uuendaKlikitud] = useState("");

  const kuvaNimi = (tegelane) => {
    uuendaKlikitud(tegelane.nimi);
  }


  const valitudTegelane = (klikitudTegelane) => {
    const valitud = JSON.parse(localStorage.getItem("valitudTegelased")) || [];
    valitud.push(klikitudTegelane);
    localStorage.setItem("valitudTegelased",JSON.stringify(valitud))
  }



  const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];


  return (
    <div>

      {tegelased.map(tegelane =>
        <div>
          <div> {tegelane.nimi} <button onClick={() => kuvaNimi(tegelane)}>Ava nimi</button></div>
          <div> {tegelane.perenimi} </div>
          <div> {tegelane.elukoht} </div>
          <div> {tegelane.vanus} </div>
          <button onClick={() => (valitudTegelane(tegelane))}>Vali</button>
        </div>)
      }

      {klikitud !== "" && <div>Klikkisid tegelase {klikitud}  peal</div>}

    </div>
  )
}

export default Avaleht
