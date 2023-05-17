
import './App.css';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage"
import SelfService from './pages/SelfService';
import 'react-toastify/dist/ReactToastify.css';
import NavigationBar from './pages/components/NavigationBar';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import { useContext } from 'react';
import { AuthContext } from '../src/pages/auth/AuthContext';
import Premium from './pages/Premium';
import Basic from './pages/Basic';
import Forms from './pages/Forms'
import PackageSelectionPage from './pages/Packages';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
function App() {

  const { loggedIn } = useContext(AuthContext);

  return (
    <div className='app-background'>

<NavigationBar />


<Routes>
  <Route path="" element={<HomePage />} />
  <Route path="basic" element={<Basic />} />
  <Route path="premium" element={<Premium />} />
  <Route path="forms" element={<Forms />} />
  <Route path="packages" element={<PackageSelectionPage />} />
  <Route path="admin" element={<Admin />} />
  <Route path="cart" element={<Cart />} />



  {loggedIn === true && <>
    <Route path="selfservice" element={<SelfService />} />
  </>}

  <Route path="login" element={<Login />} />
  <Route path="signup" element={<Signup />} />
  <Route path="*" element={<div>404 NOT FOUND </div>} />

</Routes>
    </div>
  );
}

export default App;
