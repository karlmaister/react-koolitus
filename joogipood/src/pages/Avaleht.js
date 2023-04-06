import React, { useState } from 'react'
import joogidFailist from '../joogid.json'
import { Link } from 'react-router-dom';

function Avaleht() {

    const [joogid, uuendaJoogid] = useState(joogidFailist);

    return (
        <div>

            Joogid: {joogid.map((jook,index) => 
            <div>
                <span>{jook}</span>
                <Link to={"/jook/" + index}><button>Halda</button></Link>
            </div>)}
                

        </div>
    )
}

export default Avaleht
