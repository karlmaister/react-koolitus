import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'


function MuudaUudis() {
    const {index} = useParams();
    const uudisedLS = JSON.parse(localStorage.getItem("uudised")) || [];
    const leitudUudis = uudisedLS[index];
    const uudisRef = useRef();


    function muuda() {
        uudisedLS[index] = uudisRef.current.value;
        localStorage.setItem("uudised", JSON.stringify(uudisedLS));
    }

  return (
    <div>
      <div>
            <label>Uudise pealkiri</label> <br />
            <input ref={uudisRef} defaultValue={leitudUudis} type="text" /> <br />
            <button onClick={muuda}>Muuda uudis</button>
        </div>
    </div>
  )
}

export default MuudaUudis
