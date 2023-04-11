import React, { useState } from 'react'
import tegevusedFailist from '../tegevused.json'

function Tegevused() {

  const [tegevused, uuendaTegevused] = useState(tegevusedFailist);

  function filtreeri(userijargi) {
    const vastus = tegevusedFailist.filter(e => e.userId === userijargi);
    uuendaTegevused(vastus);
  }

  function fitlreerivalmis(completed) {
    const vastus = tegevusedFailist.filter(e => e.completed === completed );
    uuendaTegevused(vastus);
    
  }

  function filtreeriT() {
    const vastus = tegevusedFailist.filter(e => e.title.startsWith("t"))
    uuendaTegevused(vastus);
  }

  function filtreeri20() {
    const vastus = tegevusedFailist.filter(e => e.title.length > 20)
    uuendaTegevused(vastus);
  }

  function reset() {
    uuendaTegevused(tegevusedFailist.slice());
  }



  return (
    <div>
      <div>Kokku tegevusi: {tegevused.length}</div>
      <button onClick={() => filtreeri(1)}>ID 1</button>
      <button onClick={() => filtreeri(2)}>ID 2</button>
      <button onClick={() => filtreeri(3)}>ID 3</button>
      <button onClick={() => fitlreerivalmis(true)}>Valmis</button>
      <button onClick={() => fitlreerivalmis(false)}>Tegemata</button>
      <button onClick={filtreeriT}>T algus</button>
      <button onClick={filtreeri20}>Pikemad 20</button>
      <button onClick={reset}>RESET</button>
      


    {tegevused.map(e => 
    <div>
      <div>{e.userId}</div>
      <div>{e.id}</div>
      <div>{e.title}</div>
      <div>{e.completed}</div>
      <br />
      </div> )}


    </div>
  )
}

export default Tegevused
