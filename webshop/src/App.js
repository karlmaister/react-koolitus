
import { Routes, Route, Link } from 'react-router-dom';
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
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';



function App() {

  const { t, i18n } = useTranslation();

  const updateLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language",newLanguage);
  }


  return (
    <div className="App">

      {/* <h1>{t('Welcome to React')}</h1> */}

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"> WebSHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
          </Nav>
          <img className="langicon" src="/estonia.png" onClick={() => updateLanguage("ee")}/>
          <img className="langicon" src="/uk.png" onClick={() => updateLanguage("en")}/>
        </Container>

      </Navbar>
      <br />


      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="shops" element={<Shops />} />
        <Route path="product" element={<SingleProduct />} />
        <Route path="admin" element={<AdminHome />} />
        <Route path="admin/add-product" element={<AddProduct />} />
        <Route path="admin/edit-product/:id" element={<EditProduct />} />
        <Route path="admin/maintain-products" element={<MaintainProducts />} />
        <Route path="admin/maintain-categories" element={<MaintainCategories />} />
        <Route path="admin/maintain-shops" element={<MaintainShops />} />
      </Routes>

    </div>
  );
}

export default App;
