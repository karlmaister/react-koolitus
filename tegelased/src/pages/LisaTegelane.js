import React from 'react'
import { useRef, useState } from 'react'


function LisaTegelane() {
    const [sonum, muudaSonum] = useState("")
    const nimiRef = useRef()

    function n2itaTekst() {

        if (nimiRef.current.value === "") {

        muudaSonum('Tühja nimega ei saa sisestada');
        }
        else {
            muudaSonum("Tegelane lisatud: " + nimiRef.current.value);
        }
        }

  return (
    <div>
      
<div>{sonum}</div>
<label>Tegelase nimi</label>
<input ref={nimiRef} type="text"/>
{ <button onClick={() => muudaSonum(n2itaTekst)}>Lisa uus</button>}
    </div>
  )
}

export default LisaTegelane
