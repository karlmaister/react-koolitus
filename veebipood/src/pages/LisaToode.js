import React, { useRef, useState } from 'react'
import tootedFailist from "../data/tooted.json"

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!");
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();


const lisa = () => {
if (nimiRef.current.value === "") {

    uuendaSonum("Tühja nimiega toodet ei saa lisada");
    }  else {
    uuendaSonum("Toode lisatud: " + nimiRef.current.value);
    const uusToode = {
      "nimi": nimiRef.current.value,
      "hind": Number(hindRef.current.value),
      "pilt": piltRef.current.value,
      "aktiivne": aktiivneRef.current.checked
    }
    tootedFailist.push(uusToode);
    }
  }


  return (
    <div>
      <div>{sonum}</div>
      <label>Uue toote nimi</label> <br />
      <input ref={nimiRef}type="text"/> <br />
      <label>Uue toote hind</label> <br />
      <input ref={hindRef}type="text"/> <br />
      <label>Uue toote pilt</label> <br />
      <input ref={piltRef}type="text"/> <br />
      <label>Uue toote aktiivus</label> <br />
      <input ref={aktiivneRef}type="checkbox"/> <br />
      <button onClick={lisa}>Lisa</button>      <br />
    </div>
  )
}

export default LisaToode