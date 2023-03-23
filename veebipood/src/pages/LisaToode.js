import React, { useRef, useState } from 'react'

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!");
  const inputiLuger = useRef();


const lisa = () => {
if (inputiLuger.current.value === "") {

    uuendaSonum("Tühja nimiega toodet ei saa lisada");
    }  else {
    uuendaSonum("Toode lisatud " + inputiLuger.current.value);
    }
  }


  return (
    <div>
      <div>{sonum}</div>
      <label>BMW M5</label> <br />
      <input ref={inputiLuger}type="text"/> <br />
      <button onClick={lisa}>Osta</button>      <br />
    </div>
  )
}

export default LisaToode