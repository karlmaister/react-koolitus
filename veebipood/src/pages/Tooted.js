import React, { useState } from 'react'
import ostukorvFailist from "../data/ostukorv.json"
import tootedFailist from "../data/tooted.json"
import { Link } from 'react-router-dom'

function Tooted() {
const [tooted,uuendaTooted] = useState(tootedFailist.slice())

function lisaOstukorvi(klikitudToode) {
  ostukorvFailist.push(klikitudToode);
}

function sorteeriAZ() {
  tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
  uuendaTooted(tooted.slice())
}

function sorteeriZA() {
  tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
  uuendaTooted(tooted.slice())
}

function sorteeriKasvav() {
  tooted.sort((a,b) => a.hind - b.hind);
  uuendaTooted(tooted.slice())
}

function sorteeriKahanev() {
  tooted.sort((a,b) => b.hind - a.hind);
  uuendaTooted(tooted.slice())
}

function filtreeri(esitaht) {
  const vastus = tootedFailist.filter(toode => toode.nimi.startsWith(esitaht));
  uuendaTooted(vastus);
}

  return (
    <div>
      <button onClick={sorteeriAZ}>sorteeriAZ</button>
      <button onClick={sorteeriZA}>sorteeriZA</button>
      <button onClick={sorteeriKasvav}>sorteeriKasvav</button>
      <button onClick={sorteeriKahanev}>sorteeriKahanev</button>
      <br /><br />
      <button onClick={() => filtreeri("B")}>B</button>
      <button onClick={() => filtreeri("N")}>N</button>
      <button onClick={() => filtreeri("T")}>T</button>

      {tooted.filter(e => e.aktiivne).map((toode,jrkNr) =>
         <div key={jrkNr}>
          <Link to={"/yksiktoode/" + toode.nimi}> 
          <img className="pilt" src={toode.pilt}/>
          <div>{toode.nimi}</div>
          <div>{toode.hind}</div>
          <div>{toode.aktiivne}</div>
          </Link>
          <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
          </div>)}      
    </div>
  )
}

export default Tooted
