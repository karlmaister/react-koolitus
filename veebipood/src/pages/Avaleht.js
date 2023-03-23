import React, { useState } from 'react'

function Avaleht() {
const [kogus, uuendaKogus] = useState(6);
const [sonum, uuendaSonum] = useState("Uuenda kogust");
const [laigitud, uuendaLaigitud] =useState(false); 


function nulli() {
  uuendaKogus(0);
  uuendaSonum("Kogus nullitud")
}

function vahenda() {
  uuendaKogus(kogus - 1);
  uuendaSonum("Kogus vähendatud")
}

function suurenda() {
  uuendaKogus(kogus + 1);
  uuendaSonum("Kogus suurendatud")
}

  return (
    <div>
        { laigitud===true && <img src="/laigitud.svg" alt="" />}
        { laigitud===false && <img src="/mittelaigitud.svg" alt="" />}

      
      <button onClick={ () => uuendaLaigitud(true)}>Like</button>
      <button onClick={ () => uuendaLaigitud(false)}>Unlike</button>


      <div>{sonum}</div>

      {kogus > 0 &&<button onClick={nulli}>Nulli tagasi</button>}
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      {kogus}
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht
