import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function AppHeader() {
  return (
    <Navbar expand="lg" className="navbar justify-content-center">
      <Container>
        <Navbar.Brand href="/" className='logo-conteiner'> <img src='/images/logo.png' width="180" height="180" alt="LOGO" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='barra-nav-menu-item'>Pagina Inicial </Link>
            <Link to="/servicos" className='barra-nav-menu-item'> Serviços </Link>
            <Link to="/contacte_nos" className='barra-nav-menu-item'>Contacte-nos </Link>
            <Link to="/sobre_nos" className='barra-nav-menu-item'> Sobre Nós</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="socials header-socials">
        <ul>
          <li><a href="https://mobile.facebook.com/profile.php?id=61557475474340&_rdc=1&_rdr"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://twitter.com/Connection0201"><i className="fab fa-x-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/in/connection-mozambique-a4b1b8296/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.instagram.com/connectionmozambique"><i className="fa-brands fa-instagram"></i></a></li>
        </ul>
      </div>
    </Navbar>
  );
}

export default AppHeader;