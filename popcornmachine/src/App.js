
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
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import BusinessAccount from './pages/BusinessAccount';
import PrivateAccount from './pages/PrivateAccount';
import Portfolio from './pages/Portfolio';
import TermsAndConditions from './pages/TermsAndConditions';
import Footer from '../src/pages/components/Footer'
function App() {

  const { loggedIn } = useContext(AuthContext);

  return (
    <div className='app-background'>
 <NavigationBar />



<Routes>
  <Route path="" element={<PrivateAccount />} />
  <Route path="basic" element={<Basic />} />
  <Route path="premium" element={<Premium />} />
  <Route path="forms" element={<Forms />} />
  <Route path="admin" element={<Admin />} />
  <Route path="cart" element={<Cart />} />
  <Route path="private" element={<PrivateAccount />} />
  <Route path="business" element={<BusinessAccount />} />
  <Route path="aboutus" element={<AboutUs />} />
  <Route path="portfolio" element={<Portfolio />} />
  <Route path="homepage" element={<HomePage />} />
  <Route path="t&c" element={<TermsAndConditions />} />
  




  {loggedIn === true && <>
    <Route path="selfservice" element={<SelfService />} />
  </>}

  <Route path="login" element={<Login />} />
  <Route path="signup" element={<Signup />} />
  <Route path="*" element={<div>404 NOT FOUND </div>} />

</Routes>
<Footer/>
    </div>
  );
}

export default App;
