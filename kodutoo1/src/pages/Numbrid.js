import React, { useState } from 'react'
import numbersFailist from "../data/numbers.json"

function Numbrid() {

    const [numbers, uuendaNumbers] = useState(numbersFailist)

    function reset() {
        uuendaNumbers(numbersFailist)
    }

    function sorteeriAZ () {
        numbersFailist.sort((a,b) => a.toString().localeCompare(b.toString()));
        uuendaNumbers(numbersFailist.slice())

    }

    function sorteeriZA () {
        numbersFailist.sort((b,a) => a.toString().localeCompare(b.toString()));
        uuendaNumbers(numbersFailist.slice())

    }

    function sorteeriKahanev () {
        numbersFailist.sort((b,a) => a - b );
        uuendaNumbers(numbersFailist.slice())

    }

    function sorteeriKasvav () {
        numbersFailist.sort((a,b) => a - b );
        uuendaNumbers(numbersFailist.slice())

    }

    function filtreeriSuuremad8() {
        const vastus = numbersFailist.filter(numberid => numberid > 8);
        uuendaNumbers(vastus);
    }

    function filtreeriVaiksemad10() {
        const vastus = numbersFailist.filter(numberid => numberid < 10);
        uuendaNumbers(vastus);
    }

    function filtreeriPaarid() {
        const vastus = numbersFailist.filter(e => e % 2 === 0 );
        uuendaNumbers(vastus);
    }

    function filtreeriPaaritud() {
        const vastus = numbersFailist.filter(e => e % 2 != 0 );
        uuendaNumbers(vastus);
    }

    function korrutaKahega() {
        const vastus = numbers.map(e => e * 2);
        uuendaNumbers(vastus);
    }

    function jagaKolmega() {
        const vastus = numbers.map(e => e / 3);
        uuendaNumbers(vastus);
    }

    function liida10() {
        const vastus = numbers.map(e => e + 10);
        uuendaNumbers(vastus);
    }

    function lahuta1() {
        const vastus = numbers.map(e => e - 1);
        uuendaNumbers(vastus);
    }


    return (
        <div>

        <button onClick={reset}>RESET</button>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri ZA</button>
        <button onClick={sorteeriKasvav}>Sorteeri Kasvav</button>
        <button onClick={sorteeriKahanev}>Sorteeri Kahanev</button>
        <button onClick={filtreeriSuuremad8}>Filtreeri suurem 8</button>
        <button onClick={filtreeriVaiksemad10}>Filtreeri väiksem 10</button>
        <button onClick={filtreeriPaarid}>Filtreeri Paarid</button>
        <button onClick={filtreeriPaaritud}>Filtreeri Paaritud</button>
        <button onClick={korrutaKahega}>Korruta 2</button>
        <button onClick={jagaKolmega}>Jaga 3</button>
        <button onClick={liida10}>Liida 10</button>
        <button onClick={lahuta1}>Lahuta 1</button>


            {numbers.map(numberid => <div> {numberid}</div>)}

        </div>
    )
}

export default Numbrid
