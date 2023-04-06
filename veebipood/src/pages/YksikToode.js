import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json"


function YksikToode() {

  // <Route path="yksiktoode/:jrkNr" element={ <YksikToode/> }/>

  const { jrkNr } = useParams();
  const leitud = tootedFailist[jrkNr];

  return (
    <div>
      {leitud !== undefined && <div>
        <div>Toote nr:{jrkNr}</div>
        <div>Toote nimi: {leitud} </div>
        <div>Toote pilt:</div>
      </div>}
      {leitud === undefined && <div>Toodet ei leitud</div>}
    </div>
  )
}

export default YksikToode
