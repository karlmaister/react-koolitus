import React, { useRef, useState } from 'react'



function LisaUudis() {

    const uudiseRef = useRef();

    function kontrolli() {
        
    }

    function lisaUusUudis() {

        const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
        uudised.push(uudiseRef.current.value);
        localStorage.setItem("uudised", JSON.stringify(uudised));
    }
    return (
        <div>
            <label>Uudise pealkiri</label>
            <input ref={uudiseRef} onChange={kontrolli} type="text" />
            <button onClick={lisaUusUudis}>Lisa uudis</button>
        </div>
    )
}

export default LisaUudis
