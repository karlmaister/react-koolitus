import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import tootajadFailist from '../Tootajad.json'

function Meist() {
  const [kontakt, n2itaKontakt] = useState(tootajadFailist.slice());

  const [valitud, uuendaValitud] = useState("");

  function votaYhendust(e) {
    uuendaValitud(e.nimi);
  }

  return (

    <div>

      {kontakt.map(e =>
        <div className={e.nimi === valitud ? 'aktiivne' : undefined}> <br />
          <div >Nimi: {e.nimi}</div>
          <div>Tegevusala: {e.ala}</div>
          <div>Telefon: {e.telefon}
            <button onClick={() => votaYhendust(e)}>Võta ühendust</button></div>
        </div>
      )}



      {/* <div> see on meist, nähtav localhost:3000/meist aadressil </div>
      <div>Karl</div>
        
        <div>Põhivend</div>
        <button onClick={() => n2itaKontakt("+37588964")}>Võta ühendust</button>
        <br /><br />
        <div>Batman</div>
        
        <div>SEO</div>
        <button onClick={() => n2itaKontakt("BAT signaal")}>Võta ühendust</button>
        <br /><br />
        <div>Aquaman</div>
        
        <div>Turundus</div>
        <button onClick={() => n2itaKontakt("+3758896411")}>Võta ühendust</button>
        <br /><br />
        <div>Superman</div>
        
        <div>Spetsialist</div>
        <button onClick={() => n2itaKontakt("+3758896422")}>Võta ühendust</button>
        <br /><br />
        { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>} */}



      <ToastContainer position='top-center'></ToastContainer>
    </div>
  )
}

export default Meist
