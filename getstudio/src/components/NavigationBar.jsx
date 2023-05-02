import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';

function NavigationBar() {

    const { t, i18n } = useTranslation();

    const updateLanguage = (newLanguage) => {
      i18n.changeLanguage(newLanguage);
      localStorage.setItem("language",newLanguage);
    }


  return (
    <div>



      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/"> GetStudio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Gallery">{t("nav.gallery")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("nav.contact")}</Nav.Link>
            <Nav.Link as={Link} to="/products">{t("nav.products")}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t("nav.cart")}</Nav.Link>
          </Nav>
          <img className="langicon" alt="" src="/estonia.png" onClick={() => updateLanguage("ee")}/>
          <img className="langicon" alt="" src="/uk.png" onClick={() => updateLanguage("en")}/>
        </Container>

      </Navbar>
    </div>
  )
}

export default NavigationBar
