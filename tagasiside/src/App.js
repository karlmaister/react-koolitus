
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Tagasiside from './pages/Tagasiside';


function App() {
  return (
    <div className="App">
    
    <Link to="/">
          <button>Tere</button>
        </Link>

        <Link to="/tagasiside">
          <button>Tagasisided</button>
        </Link>


    <Routes>
    <Route path="/" exact element={<div>Tere</div>}/>
    <Route path="/tagasiside" exact element={<Tagasiside /> }/>
    </Routes>
    </div>
  );
}

export default App;
