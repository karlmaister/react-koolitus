
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Sedaanid from './pages/Sedaanid';
import Touringud from './pages/Touringud';
import Mseeriad from './pages/Mseeriad';


function App() {
  return (
    <div>
     <img  className="main-pic" src="https://hips.hearstapps.com/hmg-prod/images/2024-bmw-5-series-102-1676576906.jpg" alt="" />
     <div className="rectangle"></div>

     <div className='navigation-pic'>
      <Link to="bmwsedaan">
        <img src="https://www.bmw.ee/content/dam/bmw/common/all-models/5-series/sedan/2021/Navigation/bmw-5-series-sedan-POSI-modelfinder.png" alt="" />
      </Link>
      <Link to="bmwtouring">
        <img src="https://web21st.imgix.net/assets/images/new-vehicles/bmw/bmw-5-series-touring-2020.png" alt="" />
      </Link>
      <Link to="bmwm5">
        <img src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/50723/m5-exterior-right-front-three-quarter-2.jpeg?q=75" alt="" />
      </Link>
    </div>

    <Routes>
      <Route path="bmwsedaan" element={'Sedaanid'} />
      <Route path="bmwtouring" element={'Touringud'} />
      <Route path="bmwm5" element={'Mseeriad'} />
    </Routes>
    </div>
  );
}

export default App;
