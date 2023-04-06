import React, { useState } from 'react'
import tootedFailist from "../data/tooted.json"
import { Link } from 'react-router-dom';

function HaldaTooted() {
  const [tooted, uuendaToode] = useState(tootedFailist)

  function kustuta(index) {
    tooted.splice(index, 1);
    uuendaToode(tootedFailist.slice());
  }

  return (
    <div>
      {tooted.map((yksToode, index) =>
        <div key={index}>
          <span>{yksToode}</span>
          <button onClick={kustuta}>Kustuta</button>
          <Link to={"/muuda/" + index}>
            <button>Muuda</button>
          </Link>
        </div>)}
    </div>
  )
}

export default HaldaTooted
