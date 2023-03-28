import React, {useRef, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';


function Seaded() {
    const [keel, uuendaKeel] = useState(localStorage.getItem("keel") || "est");
    const aadressViide = useRef();
    const emailViide = useRef();
    const telefonViide = useRef();


const muudaKeelEst = () => {
    uuendaKeel("est");
    localStorage.setItem("keel", "est"); 

}

const muudaKeelEng = () => {
    uuendaKeel("eng");
    localStorage.setItem("keel", "eng");
}
 
const muudaKeelFin = () => {
    uuendaKeel("fin");
    localStorage.setItem("keel", "fin");
}

const salvestaAadress = () => {
    if (/^[A-ZÜÕÖÄ0-9]/.test(aadressViide.current.value)=== false) {
        toast.success("Edukalt sisestatud");
        return;
    }
    localStorage.setItem("aadress", aadressViide.current.value);
    aadressViide.current.value = "";
}

const salvestaEmail = () => {
    if (emailViide.current.value.includes("@") === false) {
        toast.error("@ märk on puudu emailis");
        return;
    }
    localStorage.setItem("email", emailViide.current.value);
    emailViide.current.value = "";
}

const salvestaTelefon = () => {
    if (/^[0-9]+$/.test(telefonViide.current.value)=== false) {
        toast.error("Ainult numbrid");
        return;
    }
    localStorage.setItem("telefon", telefonViide.current.value);
    telefonViide.current.value = "";
}


return (
    <div>
        <div>
            <label>Aadress</label>
            <input ref={aadressViide} type="text"/>
            <button onClick={salvestaAadress}>Salvesta</button> <br />
        </div>
<div>
            <label>Email</label>
            <input ref={emailViide} type="text"/>
            <button onClick={salvestaEmail}>Salvesta</button> <br />
        </div>
        <div>
            <label>Telefon</label>
            <input ref={telefonViide} type="text"/>
            <button onClick={salvestaTelefon}>Salvesta</button> <br />
        </div>
        <br />
        <button onClick={muudaKeelEst}>Eesti keelseks</button>
        <button onClick={muudaKeelEng}>To English</button>
        <button onClick={muudaKeelFin}>Suomi</button>
        {keel === "est" &&<div>Leht on eesti keeles</div>}
        {keel === "eng" &&<div>Page is in Enlgish</div>}
        {keel === "fin" &&<div>Suomeksi</div>}


        <ToastContainer position="top-center"></ToastContainer>
    </div>
  )
}

export default Seaded
