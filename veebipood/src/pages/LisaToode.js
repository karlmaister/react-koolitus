import React, { useRef, useState } from 'react'
import tootedFailist from "../data/tooted.json"

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!");
  const inputiLuger = useRef();


const lisa = () => {
if (inputiLuger.current.value === "") {

    uuendaSonum("Tühja nimiega toodet ei saa lisada");
    }  else {
    uuendaSonum("Toode lisatud: " + inputiLuger.current.value);
    tootedFailist.push(inputiLuger.current.value);
    }
  }


  return (
    <div>
      <div>{sonum}</div>
      <label>Uue toote nimi</label> <br />
      <input ref={inputiLuger}type="text"/> <br />
      <button onClick={lisa}>Osta</button>      <br />
    </div>
  )
}

export default LisaToode