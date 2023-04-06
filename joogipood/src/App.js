import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaJook from './pages/LisaJook';
import HaldaJooke from './pages/HaldaJooke';


function App() {
  return (
    <div className="App">
<Link to="avaleht">
        <button>Avaleht</button>
      </Link>
      <Link to="lisa">
        <button>Lisa jooke</button>
      </Link>
      <Link to="halda">
        <button>Halda jooke</button>
      </Link>



      <Routes>
        <Route path="/" element={<Avaleht />} />
        <Route path="lisa" element={<LisaJook />} />
        <Route path="halda" element={<HaldaJooke />} />
        <Route path="jook/:number" element={<HaldaJooke />} />
      </Routes>
    </div>
  );
}

export default App;
