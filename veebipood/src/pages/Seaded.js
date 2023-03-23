import React, {useState} from 'react'

function Seaded() {
    const [keel, uuendaKeel] = useState("est");

const muudaKeelEst = () => {
    uuendaKeel("est");

}

const muudaKeelEng = () => {
    uuendaKeel("eng");
}
 
const muudaKeelFin = () => {
    uuendaKeel("fin");
}
return (
    <div>
        <button onClick={muudaKeelEst}>Eesti keelseks</button>
        <button onClick={muudaKeelEng}>To English</button>
        <button onClick={muudaKeelFin}>Suomi</button>
        {keel === "est" &&<div>Leht on eesti keeles</div>}
        {keel === "eng" &&<div>Page is in Enlgish</div>}
        {keel === "fin" &&<div>Suomeksi</div>}

    </div>
  )
}

export default Seaded
