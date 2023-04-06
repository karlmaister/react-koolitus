
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/avaleht';
import Sedaanid from './pages/Sedaanid';
import Touringud from './pages/Touringud';
import Mseeriad from './pages/Mseeriad';


function App() {
  return (
    <div>
     <div className='navigation-pic'>

      <Link to='/Sedaanid'>
        <img src="https://www.bmw.ee/content/dam/bmw/common/all-models/5-series/sedan/2021/Navigation/bmw-5-series-sedan-POSI-modelfinder.png" alt="" />
      </Link>
      <Link to="/Touringud">
        <img src="https://web21st.imgix.net/assets/images/new-vehicles/bmw/bmw-5-series-touring-2020.png" alt="" />
      </Link>
      <Link to="/Mseeriad">
        <img src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/50723/m5-exterior-right-front-three-quarter-2.jpeg?q=75" alt="" />
      </Link>
    </div>

    <Routes>
    <Route path="" element={<Avaleht/>} />
      <Route path="/Sedaanid" element={<Sedaanid/>} />
      <Route path="/Touringud" element={<Touringud/>} />
      <Route path="/Mseeriad" element={<Mseeriad/>} />
    </Routes>
    </div>
  );
}

export default App;
