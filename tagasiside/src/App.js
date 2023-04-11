
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Tagasiside from './pages/Tagasiside';
import Tagasisideandjad from './pages/Tagasisideandjad';
import Tegevused from './pages/Tegevused';


function App() {
  return (
    <div className="App">
    
    <Link to="/">
          <button>Tere</button>
        </Link>

        <Link to="/tagasiside">
          <button>Tagasisided</button>
        </Link>

        <Link to="/tagasisideandjad">
          <button>Tagasiside andjad</button>
        </Link>

        <Link to="/tegevused">
          <button>Tegevused</button>
        </Link>


    <Routes>
    <Route path="/" exact element={<div>Tere</div>}/>
    <Route path="/tagasiside" exact element={<Tagasiside /> }/>
    <Route path="/tagasisideandjad" exact element={<Tagasisideandjad /> }/>
    <Route path='/tegevused' exact element={ <Tegevused />} />
    </Routes>
    </div>
  );
}

export default App;
