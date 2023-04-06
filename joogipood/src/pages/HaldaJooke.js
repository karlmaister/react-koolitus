import React, { useState, useRef } from 'react'
import joogidFailist from '../joogid.json'



function HaldaJooke() {


    const [joogid, uuendaJoogid] = useState(joogidFailist);


    function kustuta(index) {
        joogidFailist.splice(index, 1);
        uuendaJoogid(joogidFailist.slice());

    }

    

    return (
        <div>

            {joogid.map((jook,index) => <div>{jook}
            <button onClick={kustuta}>X</button>
            </div>)}


      
        </div>
    )
}

export default HaldaJooke
