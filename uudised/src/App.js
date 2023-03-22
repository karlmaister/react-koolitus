
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';




function App() {
  return (
    <div >
      <Link to='/'>
        <button>Avalehele</button>
      </Link>
      <Link to='/uudised'>
        <button>Uudiste lehele</button>
      </Link>
      <Link to='/kontakt'>
        <button>Võta meiega ühendust</button>
      </Link>
      <Link to='/meist'>
        <button>Info meist</button>
      </Link>


<Routes>

<Route path='' element={ <Avaleht /> } />
<Route path='uudised' element={ <Uudised/> } />
<Route path='kontakt' element={ <Meist/> } /> 
<Route path='meist' element={<Kontakt/> } />

</Routes>
      
  
    </div>
  );
}

export default App;
