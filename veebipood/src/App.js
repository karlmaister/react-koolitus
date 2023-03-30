
import './App.css';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import HaldaTooted from './pages/HaldaTooted';
import MuudaToode from './pages/MuudaToode';
import Tooted from './pages/Tooted';
import YksikToode from './pages/YksikToode';
import Poed from './pages/Poed';
import { useState } from 'react';


function App() {

  const [veebileheVarv, uuendaVeebileheVarv] = useState(localStorage.getItem("varv") || "hele-leht")
  const [url, uuendaUrl] = useState(window.location.href.split("localhost:3000")[1])


  function muudaVarvi() {
    uuendaVeebileheVarv("tume-leht");
    localStorage.setItem("varv","tume-leht")
  }

  function muudaVarviHele() {
    uuendaVeebileheVarv("hele-leht");
    localStorage.setItem("varv","hele-leht")
  }


  return (
    <div className={veebileheVarv}>

   
       <Link to="/avaleht">
          <img className="pilt" src= "https://www.bmw.ee/content/dam/bmw/common/all-models/3-series/sedan/2022/navigation/bmw-3-series-sedan-lci-modelfinder.png" alt=""></img>
       </Link>

    {veebileheVarv === "hele-leht" && <button onClick={muudaVarvi}>Tume</button>}
    {veebileheVarv === "tume-leht" && <button onClick={muudaVarviHele}>Hele</button>}


        <Link to="/ostukorv">
          <button className={url === "/ostukorv" ? "aktiivne-nupp" : "nupp"} onClick={() => uuendaUrl("/ostukorv")} >Ostukorv</button>
        </Link>

        <Link to="/lisa-toode">
          <button className={url === "/lisa-toode" ? "aktiivne-nupp" : "nupp"} onClick={() => uuendaUrl("/lisa-toode")}>Lisa toode</button>
        </Link>

        <Link to="/meist">
          <button className={url === "/meist" ? "aktiivne-nupp" : "nupp"} onClick={() => uuendaUrl("/meist")}>Meist</button>
        </Link>

        <Link to="/seaded">
          <button className={url === "/seaded" ? "aktiivne-nupp" : "nupp"} onClick={() => uuendaUrl("/seaded")}>Seaded</button>
        </Link>

        <Link to="/poed">
          <button className={url === "/poed" ? "aktiivne-nupp" : "nupp"} onClick={() => uuendaUrl("/poed")}>Poed</button>
        </Link>

        <Link to="/halda">
          <button className={url === "/halda" ? "aktiivne-nupp" : "nupp"} onClick={() => uuendaUrl("/halda")}>Halda tooteid</button>
        </Link>

        <Link to="/tooted">
          <button className={url === "/tooted" ? "aktiivne-nupp" : "nupp"} onClick={() => uuendaUrl("/tooted")}>Tooted</button>
        </Link>


        <Routes>
          <Route path="" element={ <Navigate to="avaleht"/> }/>
          <Route path="avaleht" element={ <Avaleht/> }/>
          <Route path="ostukorv" element={ <Ostukorv/> }/>
          <Route path="lisa-toode" element={ <LisaToode/> }/>
          <Route path="meist" element={ <Meist/> }/>
          <Route path="seaded" element={ <Seaded/> }/>
          <Route path="poed" element={ <Poed/> }/>
          <Route path="halda" element={ <HaldaTooted/> }/>
          <Route path="muuda" element={ <MuudaToode/> }/>
          <Route path="tooted" element={ <Tooted/> }/>
          <Route path="yksiktoode" element={ <YksikToode/> }/>
        </Routes>

        {/* <div>Footer</div> */}
    </div>
  );
}

export default App;
