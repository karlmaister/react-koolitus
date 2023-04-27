
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/global/HomePage"
import Cart from "./pages/global/Cart"
import {ContactUs} from "./pages/global/ContactUs"
import Shops from "./pages/global/Shops"
import SingleProduct from "./pages/global/SingleProduct"
import AdminHome from "./pages/admin/AdminHome"
import AddProduct from "./pages/admin/AddProduct"
import EditProduct from "./pages/admin/EditProduct"
import MaintainProducts from "./pages/admin/MaintainProducts"
import MaintainCategories from "./pages/admin/MaintainCategories"
import MaintainShops from "./pages/admin/MaintainShops"
import 'react-toastify/dist/ReactToastify.css';
import NavigationBar  from './components/NavigationBar';



function App() {




  return (
    <div className="App">
      <NavigationBar />

      <br />

      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="shops" element={<Shops />} />
        <Route path="admin" element={<AdminHome />} />
        <Route path="admin/add-product" element={<AddProduct />} />
        <Route path="admin/edit-product/:id" element={<EditProduct />} />
        <Route path="admin/maintain-products" element={<MaintainProducts />} />
        <Route path="admin/maintain-categories" element={<MaintainCategories />} />
        <Route path="admin/maintain-shops" element={<MaintainShops />} />
        <Route path="single-product/:id" element={ <SingleProduct/> }/>
      </Routes>

    </div>
  );
}

export default App;
