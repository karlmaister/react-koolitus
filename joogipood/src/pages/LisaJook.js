import React from 'react'
import joogidFailist from '../joogid.json'
import { useRef, useState } from 'react';

function LisaJook() {

    const [joogid, uuendaJoogid] = useState(joogidFailist);
    const jookRef = useRef()


    function lisaUusJook() {
        joogidFailist.push(jookRef.current.value);
        uuendaJoogid(joogidFailist.slice());
        
    }
  return (
    <div>
        <label>Sisesta jook </label>
        <input ref={jookRef} type="text"/>
        <button onClick={lisaUusJook}>Lisa</button>
    </div>
  )
}

export default LisaJook
