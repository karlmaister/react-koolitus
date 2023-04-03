import React, { useState } from 'react'
import raamatudFailist from "../data/books.json"

function Books() {


    const [raamatulist, uuendaRaamatulist] = useState(raamatudFailist);

    function muudaTagasi() {
        uuendaRaamatulist(raamatudFailist);

    }

    const sorteeriAZ = () => {

        raamatulist.sort(); // default paneb A-Z
        uuendaRaamatulist(raamatudFailist.slice());
    }

    const sorteeriZA = () => {

        raamatulist.sort((a, b) => b.localeCompare(a));
        uuendaRaamatulist(raamatudFailist.slice());
    }

    const sorteeriTahedKasv = () => {

        raamatulist.sort((a, b) => a.length - b.length);
        uuendaRaamatulist(raamatudFailist.slice());
    }

    function filtreeriThe() {
        const vastus = raamatudFailist.filter(raamat => raamat.includes("The", "the", "THE"));
        uuendaRaamatulist(vastus);
    }

    function filtreeriRohkemKui10() {
        const vastus = raamatudFailist.filter(raamat => raamat.length > 10);
        uuendaRaamatulist(vastus);
    }

    function filtreeriKeskelAnd() {
        const vastus = raamatudFailist.filter(raamat => raamat.split(" ", 2).includes("and"));
        uuendaRaamatulist(vastus);
    }

    function filtreeriVähemKui7() {
        const vastus = raamatudFailist.filter(raamat => raamat.length < 7);
        uuendaRaamatulist(vastus);
    }


    function muudaSuurteks() {
        const vastus = raamatudFailist.map(raamat => raamat.toUpperCase());
        uuendaRaamatulist(vastus);
    }

    function muudaVaikesteks() {
        const vastus = raamatudFailist.map(raamat => raamat.toLowerCase());
        uuendaRaamatulist(vastus);
    }

    function muudaITahedOks() {
        const vastus = raamatudFailist.map(raamat => raamat + "!");
        uuendaRaamatulist(vastus);
    }

    function muudakriipsudAlgusse() {
        const vastus = raamatudFailist.map(raamat => raamat + ".");
        uuendaRaamatulist(vastus);
    }


    return (
        <div>
            <br />
            <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
            <button onClick={sorteeriZA}>Sorteeri Z-A</button>
            <button onClick={sorteeriTahedKasv}>Sorteeri Tähtede arv</button>
            <button onClick={filtreeriVähemKui7}>Vähem kui 7</button>
            <button onClick={filtreeriKeskelAnd}>Keskel And</button>
            <button onClick={filtreeriThe}>The järgi</button>
            <button onClick={filtreeriRohkemKui10}>Rohkem kui 10</button>
            <button onClick={muudaTagasi}>RESET</button>
            <button onClick={muudaSuurteks}>Suured</button>
            <button onClick={muudaVaikesteks}>Vaiksed</button>
            <button onClick={muudaITahedOks}>! lõppu</button>
            <button onClick={muudakriipsudAlgusse}>. lõppu</button>

            {raamatulist.map(raamat => <div>{raamat}</div>)}

        </div>
    )
}

export default Books
