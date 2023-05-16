import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
// import { CartSumContext } from '../store/CartSumContext';
import { AuthContext } from '../auth/AuthContext';



function NavigationBar() {

    const { t, i18n } = useTranslation();
    // const { cartSum} = useContext(CartSumContext);
    const {loggedIn, setLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();


    const updateLanguage = (newLanguage) => {
      i18n.changeLanguage(newLanguage);
      localStorage.setItem("language",newLanguage);
    }

    const logout = () => {
      setLoggedIn(false);
      sessionStorage.removeItem("token")
      navigate("/");
    }

    const path = window.location.pathname;

  return (
    <div>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/"> <img src="https://www.arsenalproduction.house/img/logo.png" alt="arsenalvideo"></img></Navbar.Brand>
          {path !== '/' && <Navbar.Toggle aria-controls="responsive-navbar-nav" />}
          <Navbar.Collapse id="responsive-navbar-nav">
          {path !== '/' && <Nav className="me-auto">
            {loggedIn === true && <Nav.Link as={Link} to="/selfservice">{t("nav.selfservice")}</Nav.Link>}
            <Nav.Link as={Link} to="/packages">{t("nav.packages")}</Nav.Link>

            {loggedIn !== true ? 
         <Nav.Link as={Link} to="/login">{t("nav.login")}</Nav.Link>
         :  <button onClick={logout}>{t("nav.logout")}</button>}
          </Nav>}
         
        {path !== '/' && <>
          <img className="langicon" alt="" src="/estonia.png" onClick={() => updateLanguage("ee")}/>
          <img className="langicon" alt="" src="/uk.png" onClick={() => updateLanguage("en")}/>
          </>}
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </div>
  )
}

export default NavigationBar
