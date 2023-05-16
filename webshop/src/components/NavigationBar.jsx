import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { CartSumContext } from '../store/CartSumContext';
import { AuthContext } from '../store/AuthContext';



function NavigationBar() {

  const { t, i18n } = useTranslation();
  const { cartSum } = useContext(CartSumContext);
  const { loggedIn, setLoggedIn, loggedInUser, emptyUser } = useContext(AuthContext);
  const navigate = useNavigate();


  const updateLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  }

  const logout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem("token")
    navigate("/");
    emptyUser();
  }

  return (
    <div>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"> WebSHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {loggedIn === true && <Nav.Link as={Link} to="/admin">{t("nav.admin")}</Nav.Link>}
              <Nav.Link as={Link} to="/contact">{t("nav.contact")}</Nav.Link>
              <Nav.Link as={Link} to="/shops">{t("nav.shops")}</Nav.Link>
              <Nav.Link as={Link} to="/cart">{t("nav.cart")}</Nav.Link>
              {loggedIn !== true ?
                <>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                </>
                :
                <>
                  <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                  <button onClick={logout}> Logi välja</button>

                  {loggedInUser.users !== undefined && <div>Oled sisse logitud {loggedInUser.users[0].displayName}</div>}
                </>
              }
            </Nav>


            <div>Ostukorvi summa: {cartSum} €</div>
            <img className="langicon" alt="" src="/estonia.png" onClick={() => updateLanguage("ee")} />
            <img className="langicon" alt="" src="/uk.png" onClick={() => updateLanguage("en")} />
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </div>
  )
}

export default NavigationBar
