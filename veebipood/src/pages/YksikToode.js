import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json"


function YksikToode() {

  // <Route path="yksiktoode/:jrkNr" element={ <YksikToode/> }/>

  const { jrkNr } = useParams();
  const leitud = tootedFailist.find(e => e.nimi === jrkNr);

  // find leiab esimese elemendi mis on õige

  return (
    <div>
      {leitud !== undefined && <div>
        <img className="minipilt" src={leitud.pilt} alt="" />
        <div>Toote nr:{jrkNr}</div>
        <div>Toote nimi: {leitud.nimi} </div>
        <div>Toote hind: {leitud.hind} </div>
      </div>}
      {leitud === undefined && <div>Toodet ei leitud</div>}
    </div>
  )
}

export default YksikToode
