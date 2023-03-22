
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';

function App() {
  return (
    <div className="App">
       <Link to="/avaleht">
          <img className="pilt" src= "https://www.bmw.ee/content/dam/bmw/common/all-models/3-series/sedan/2022/navigation/bmw-3-series-sedan-lci-modelfinder.png" alt=""></img>
       </Link>

        <Link to="/ostukorv">
          <button className="nupp">Ostukorv</button>
        </Link>

        <Link to="/lisa-toode">
          <button className="nupp">Lisa toode</button>
        </Link>


        <Routes>
          <Route path="avaleht" element={ <Avaleht/> }/>
          <Route path="ostukorv" element={ <Ostukorv/> }/>
          <Route path="lisa-toode" element={ <LisaToode/> }/>
        </Routes>

        {/* <div>Footer</div> */}
    </div>
  );
}

export default App;
