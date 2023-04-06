import React, { useState } from 'react'
import ostukorvFailist from "../data/ostukorv.json"
import tootedFailist from "../data/tooted.json"
import { Link } from 'react-router-dom'

function Tooted() {
const [tooted,uuendaTooted] = useState(tootedFailist)

function lisaOstukorvi(klikitudToode) {
  ostukorvFailist.push(klikitudToode);
}

  return (
    <div>
      {tooted.map((toode,jrkNr) =>
         <div key={jrkNr}>
          <Link to={"/yksiktoode/" + jrkNr}>{toode} </Link>
          <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
          </div>)}      
    </div>
  )
}

export default Tooted
