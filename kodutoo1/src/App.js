
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import Books from './pages/Books';
import Numbrid from './pages/Numbrid';
import Ylesanne from './pages/Ylesanne';
import { useState, useRef } from 'react';

function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

    const logiSisse = () => {

      if (paroolRef.current.value === "123") {

        muudaSisselogitud("jah")
        muudaSonum(kasutajaNimiRef.current.value + ", oled sisselogitud")
      } else {
        muudaSonum("Vale parool")
        }
      }
  

  return (
    
    
    <div>
      <div>{sonum}</div>

      {sisselogitud === "ei" && <div>
        <label>Kasutajanimi</label>
        <input ref={kasutajaNimiRef} type="text"/>
       <label>Parool</label>
        <input ref={paroolRef}type="password"/>
      </div>}

    {sisselogitud==="ei" && <button onClick={logiSisse}>Logi sisse</button>} 
    {sisselogitud==="jah" && <button onClick={() => muudaSisselogitud("ei")}>Logi välja</button>} <br />

    <Link to='/'>
        <button>Avaleht</button>
      </Link>
      <Link to='/kontakt'>
        <button>Kontakt</button>
      </Link>
      <Link to='/meist'>
        <button>Meist</button>
      </Link>
      <Link to='/seaded'>
        <button>Seaded</button>
      </Link>
      <Link to='/books'>
        <button>Books</button>
      </Link>
      <Link to='/numbrid'>
        <button>Numbrid</button>
      </Link>
      <Link to='/ylesanne'>
        <button>Ylesanne</button>
      </Link>
    <Routes>
     <Route path='' element={ <Avaleht /> } />
     <Route path='kontakt' element={ <Kontakt/> } /> 
     <Route path='meist' element={<Meist/> } />  
     <Route path='seaded' element={<Seaded/> } />  
     <Route path='books' element={<Books/> } /> 
     <Route path='numbrid' element={<Numbrid/> } /> 
     <Route path='ylesanne' element={<Ylesanne/> } /> 
    </Routes>


    </div>
  );
}

export default App;
