
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Tagasiside from './pages/Tagasiside';
import Tagasisideandjad from './pages/Tagasisideandjad';


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


    <Routes>
    <Route path="/" exact element={<div>Tere</div>}/>
    <Route path="/tagasiside" exact element={<Tagasiside /> }/>
    <Route path="/tagasisideandjad" exact element={<Tagasisideandjad /> }/>
    </Routes>
    </div>
  );
}

export default App;
