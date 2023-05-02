
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from '../src/pages/HomePage'
import Cart from '../src/pages/Cart'
import Contact from '../src/pages/Contact'
import Gallery from '../src/pages/Gallery'
import Admin from '../src/pages/Admin'
import Products from '../src/pages/Products'
import NavigationBar  from './components/NavigationBar';


function App() {
  return (
    <div className="App">

<NavigationBar />
     

     <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="admin" element={<Admin />} />
        <Route path="Products" element={<Products />} />
      </Routes>


    </div>
  );
}

export default App;
