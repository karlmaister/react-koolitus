import React from 'react'
import { useRef, useState } from 'react'


function LisaTegelane() {
    const [sonum, muudaSonum] = useState("")
    const nimiRef = useRef()
    const perenimiRef = useRef()
    const vanusRef = useRef()
    const elukohtRef = useRef()



    function lisauusTegelane() {

        if (nimiRef.current.value === "") {

        muudaSonum('Tühja nimega ei saa sisestada');
        }
        else {
            muudaSonum("Tegelane lisatud: " + nimiRef.current.value);
            const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];
            tegelased.push({
              "nimi": nimiRef.current.value,
              "perenimi": perenimiRef.current.value,
              "elukoht": elukohtRef.current.value,
              "vanus": Number(vanusRef.current.value)
        })
            localStorage.setItem("tegelased", JSON.stringify(tegelased));
            
        }
        }

  return (
    <div>
      <br />
<div>{sonum}</div>
<label>Tegelase nimi</label>
<input ref={nimiRef} type="text"/>
<br />
<label>Tegelase perenimi</label>
<input ref={perenimiRef} type="text"/>
<br />
<label>Tegelase vanus</label>
<input ref={vanusRef} type="number"/>
<br />
<label>Tegelase elukoht</label>
<input ref={elukohtRef} type="text"/>
<br />
<button onClick={lisauusTegelane}>Lisa uus</button>

    </div>
  )
}

export default LisaTegelane
