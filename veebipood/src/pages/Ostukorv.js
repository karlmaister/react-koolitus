import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(["Coca", "Fanta", "Sprite"])

  function tyhjenda() {
    uuendaOstukorv([]);

  }

  return (
    <div>
      <button onClick={tyhjenda}>Tühjenda ostukorv</button>
      {ostukorv.map(toode => <div>{toode}</div>)}

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