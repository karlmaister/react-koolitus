import React, { useState } from 'react'
import poedFailist from "../data/poed.json"

function Poed() {
    const [poed, uuendaPoed] = useState(poedFailist.slice());

    function muudaTagasi() {
        uuendaPoed(poedFailist.slice());
    }

    const sorteeriAZ = () => {

        poed.sort((a, b) => a.nimi.localeCompare(b.nimi));
        uuendaPoed(poed.slice()); // default paneb A-Z
        //slice arraydel vajalik kustutab mälukoha
    }

    const sorteeriZA = () => {

        poed.sort((a, b) => b.nimi.localeCompare(a.nimi));
        uuendaPoed(poed.slice()); // default paneb A-Z

    }

    const sorteeriTahedKasv = () => {

        poed.sort((a, b) => a.nimi.length - b.nimi.length); // default paneb A-Z
        uuendaPoed(poed.slice());  //slice arraydel vajalik kustutab mälukoha
    }

    const sorteeriTahedKahv = () => {

        poed.sort((a, b) => b.nimi.length - a.nimi.length); // default paneb A-Z
        uuendaPoed(poed.slice());  //slice arraydel vajalik kustutab mälukoha
    }

    const sorteeriKolmasTaht = () => {

        poed.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2])); // default paneb A-Z
        uuendaPoed(poed.slice());  //slice arraydel vajalik kustutab mälukoha
    }

    function filtreeriEgaLoppevad() {
        const vastus = poedFailist.filter(yksPood => yksPood.nimi.endsWith("e"))
        uuendaPoed(vastus);
    }

    function filtreeri9Chars() {
        const vastus = poedFailist.filter(yksPood => yksPood.nimi.length == 9);
        uuendaPoed(vastus);
    }

    function filtreeri7Rohkem() {
        const vastus = poedFailist.filter(yksPood => yksPood.nimi.length >= 7);
        uuendaPoed(vastus);
    }

    function filtreeriSisaldabIsLuhendit() {
        const vastus = poedFailist.filter(yksPood => yksPood.nimi.includes("is"));
        uuendaPoed(vastus);
    }

    function filtreeriKolmasTahtI() {
        const vastus = poedFailist.filter(yksPood => yksPood.nimi[2] === "i");
        uuendaPoed(vastus);
    }


    function muudaSuurteks() {
        const vastus = poed.map(yksPood => { return { "nimi": yksPood.nimi.toUpperCase(), "tel": yksPood.tel } });
        uuendaPoed(vastus);
    }

    function muudaVaikesteks() {
        const vastus = poed.map(yksPood => { return { "nimi": yksPood.nimi.toLowerCase(), "tel": yksPood.tel } });
        uuendaPoed(vastus);
    }

    function muudaITahedOks() {
        const vastus = poed.map(yksPood => yksPood.nimi.replaceAll("i", "o"));
        uuendaPoed(vastus);
    }

    function muudakriipsudAlgusse() {
        const vastus = poed.map(yksPood => { return { "nimi": "--" + yksPood.nimi, "tel": yksPood.tel } });
        uuendaPoed(vastus);
    }

    function muudaTagurpidi() {
        const vastus = poed.map(yksPood => { return { "nimi": yksPood.nimi.split("").reverse().join(""), "tel": yksPood.tel }});
        uuendaPoed(vastus);
    }
    
    function arvutaTahedKokku() {
        let summa = 0;
        // summa = summa + 999;


        poed.forEach(yksPood => summa = summa + yksPood.nimi.length)

        return summa;
    }
    //.map() JS sissekirjtuataud funktsioon
    return (

        <div>
            <div>Kokku poode {poed.length} tk</div>
            <div>Kokku tähti poodidel: {arvutaTahedKokku()}</div>
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



            {poed.map(yksPood => <div key="yksPood.nimi" > {yksPood.nimi}</div>)}

        </div>
    )
}

export default Poed
