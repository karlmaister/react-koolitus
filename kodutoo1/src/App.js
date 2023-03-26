
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';

function App() {
  return (
    
    
    <div>
    
    <Link to='/'>
        <button>Avalehet</button>
      </Link>
      <Link to='/kontakt'>
        <button>Kontakt</button>
      </Link>
      <Link to='/meist'>
        <button>Meist</button>
      </Link>
    
    
    <Routes>
     <Route path='' element={ <Avaleht /> } />
     <Route path='kontakt' element={ <Kontakt/> } /> 
     <Route path='meist' element={<Meist/> } />  
    </Routes>


    </div>
  );
}

export default App;
