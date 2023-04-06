import React from 'react'
import { useState } from 'react'
import arrayfail from '../data/arrayfail.json'

function Ylesanne() {

    const [uusArray, uuendaArray] = useState(arrayfail)

    function kustuta(index) {
        uusArray.splice(index, 1);
        uuendaArray(arrayfail.slice());
    }

    return (
        <div>
            <div>Kokku asju: {arrayfail.length}</div>


            {uusArray.map((e, index) =>
                <div key={index}>
                    <span>{e}</span>
                    <button onClick={kustuta}>Kustuta</button>
                </div>)}
        </div>
    )
}

export default Ylesanne
