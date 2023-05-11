
import './App.css';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage"
import SelfService from './pages/SelfService';
import KKK from './pages/KKK'
import Contacts from "./pages/Contacts"
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


function App() {

  const { loggedIn } = useContext(AuthContext);

  return (
    <div className='app-background'>

<NavigationBar />


<Routes>
  <Route path="" element={<HomePage />} />
  <Route path="contacts" element={<Contacts />} />
  <Route path="kkk" element={<KKK />} />
  <Route path="basic" element={<Basic />} />
  <Route path="premium" element={<Premium />} />
  <Route path="forms" element={<Forms />} />
  <Route path="packages" element={<PackageSelectionPage />} />


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
