import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ostukorvFailist from "../data/ostukorv.json"

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);

  function tyhjenda() {
    uuendaOstukorv([]);
  }

  function lisa(klikitudToode) {
    ostukorvFailist.push(klikitudToode); //peab olema muutuv
    uuendaOstukorv(ostukorvFailist.slice()); //html uuendamiseks alati see
  }

  function kustuta(jrknr) {
    ostukorvFailist.splice(jrknr,1); // esimene nr mitemndat, teinde number mitu
    uuendaOstukorv(ostukorvFailist.slice());
  }


  return (
    <div>
      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda ostukorv</button>}
      {ostukorv.length > 0 && <div>Kokku tooteid {ostukorv.length} tk</div>}
      {ostukorv.map((toode, jrkNr) =>
        <div key={jrkNr}>
          {toode}
          <button onClick={() => lisa(toode)}>Lisa</button>
          <button onClick={() => kustuta(jrkNr)}>X</button>
        </div>)}
      <br />
      {ostukorv.length === 0 &&
        <div>
          <div>Ostukorv on tühi</div>
          <Link to="/avaleht">Tooteid lisama</Link>
        </div>
      }


    </div>
  )
}

export default Ostukorv