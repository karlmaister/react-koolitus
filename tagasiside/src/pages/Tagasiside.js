import React, { useState, useRef } from 'react'

function Tagasiside() {

    const [tagasisided, uuendaTagasisided] = useState(["oli hea","huvitav","teistsugune","põnev"])
    const tagasisidedRef = useRef()


    function kustuta(index) {
        tagasisided.splice(index,1);
        uuendaTagasisided(tagasisided.slice())
        
    }

    function lisaUus() {
        tagasisided.push(tagasisidedRef.current.value);
        uuendaTagasisided(tagasisided.slice())
    }

  return (
    <div>
      Tagasisided:
      {tagasisided.map((element,index) =>
      <div>
        <span>{element}</span>
        <button onClick={() => kustuta(index)}>X</button>
      </div>)}
      <br />
      <label>Lisa uus</label>
      <input ref={tagasisidedRef} type="text"/>
      <button onClick={lisaUus}>Sisesta</button>
    </div>
  )
}

export default Tagasiside
