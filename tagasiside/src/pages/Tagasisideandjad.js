import React, { useState } from 'react'
import namesFailist from '../names.json'

function Tagasisideandjad() {

    const [nimed, muudaNimesid] = useState(namesFailist);

    function reset() {
        muudaNimesid(namesFailist);
        
    }

    function filtreeriM() {
        const vastus = namesFailist.filter(e => e.startsWith("m") )
        muudaNimesid(vastus);
    }

    function filtreeri6kohalised() {
        const vastus = namesFailist.filter(e => e.length == 6 )
        muudaNimesid(vastus);
    }
    
  return (
    <div>
      
      <div>Nimesid kokku= {nimed.length} tk</div> 
      <button onClick={reset}>RESET</button>
      <button onClick={filtreeriM}>M-iga algavad</button>
      <button onClick={filtreeri6kohalised}>6-e kohalised</button>


      {nimed.map(e => <div>{e}</div>)}
    </div>
  )
}

export default Tagasisideandjad
