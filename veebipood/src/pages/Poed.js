import React, { useState } from 'react'
import poedFailist from "../data/poed.json"

function Poed() {
    const [poed, uuendaPoed] = useState(poedFailist);

    function muudaTagasi() {
        uuendaPoed(poedFailist)
    }

    const sorteeriAZ = () => {
        
        poed.sort();
        uuendaPoed(poedFailist.slice()); // default paneb A-Z
          //slice arraydel vajalik kustutab mälukoha
    }

    const sorteeriZA = () => {
        
        poed.sort((a,b) => b.localeCompare(a));
        uuendaPoed(poedFailist.slice()); // default paneb A-Z
        
    }

    const sorteeriTahedKasv = () => {

        poed.sort((a,b) => a.length - b.length); // default paneb A-Z
        uuendaPoed(poed.slice());  //slice arraydel vajalik kustutab mälukoha
    }

    const sorteeriTahedKahv = () => {

        poed.sort((a,b) => b.length - a.length); // default paneb A-Z
        uuendaPoed(poed.slice());  //slice arraydel vajalik kustutab mälukoha
    }

    const sorteeriKolmasTaht = () => {

        poed.sort((a,b) => a[2].localeCompare(b[2])); // default paneb A-Z
        uuendaPoed(poed.slice());  //slice arraydel vajalik kustutab mälukoha
    }

    function filtreeriEgaLoppevad() {
        const vastus = poedFailist.filter(yksPood => yksPood.endsWith("e") )
        uuendaPoed(vastus);
    }

    function filtreeri9Chars() {
        const vastus = poedFailist.filter(yksPood => yksPood.length == 9);
        uuendaPoed(vastus);
    }

    function filtreeri7Rohkem() {
        const vastus = poedFailist.filter(yksPood => yksPood.length >= 7);
        uuendaPoed(vastus);
    }

    function filtreeriSisaldabIsLuhendit() {
        const vastus = poedFailist.filter(yksPood => yksPood.includes("is"));
        uuendaPoed(vastus);
    }

    function filtreeriKolmasTahtI() {
        const vastus = poedFailist.filter(yksPood => yksPood[2] === "i");
        uuendaPoed(vastus);
    }


    function muudaSuurteks() {
        const vastus = poed.map(yksPood => yksPood.toUpperCase());
        uuendaPoed(vastus);
    }

    function muudaVaikesteks() {
        const vastus = poed.map(yksPood => yksPood.toLowerCase());
        uuendaPoed(vastus);
    }

    function muudaITahedOks() {
        const vastus = poed.map(yksPood => yksPood.replaceAll("i","o"));
        uuendaPoed(vastus);
    }

    function muudakriipsudAlgusse() {
        const vastus = poed.map(yksPood => "--" + yksPood);
        uuendaPoed(vastus);
    }

    function muudaTagurpidi() {
        const vastus = poed.map(yksPood => yksPood.split("").reverse());
        uuendaPoed(vastus);
    }


    //.map() JS sissekirjtuataud funktsioon
  return (

    <div>
        <div>Kokku poode {poed.length} tk</div>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahedKasv}>Sorteeri Kasvav</button>
        <button onClick={sorteeriTahedKahv}>Sorteeri Kahanev</button>
        <button onClick={sorteeriKolmasTaht}>Sorteeri Kolmas Taht</button>
        <br /><br />
        <button onClick={filtreeriEgaLoppevad}>Filtreeri 'e'ga lõppevad</button>
        <button onClick={filtreeri9Chars}>Filtreeri 9 tähte</button>
        <button onClick={filtreeri7Rohkem}>Filtreeri 7+ tähte</button>
        <button onClick={filtreeriSisaldabIsLuhendit}>Filtreeri IS</button>
        <button onClick={filtreeriKolmasTahtI}>Filtreeri 3s on I</button>
<br /> <br />

        <button onClick={muudaSuurteks}>Suured</button>
        <button onClick={muudaVaikesteks}>Vaiksed</button>
        <button onClick={muudaITahedOks}>IOks</button>
        <button onClick={muudakriipsudAlgusse}>Kriipsud</button>
        <button onClick={muudaTagurpidi}>Tagurpidi</button>

        <br /><br />
        <button onClick={muudaTagasi}>Reset</button>
        
        
        
        {poed.map(yksPood => <div>{yksPood}</div> )}
        
    </div> 
)
}

export default Poed
