import React, { useState, useEffect } from "react";
import { Navbar, Offcanvas, Nav, Container, CloseButton } from 'react-bootstrap';
import { NavLink, Outlet } from "react-router-dom";
import logo from '../logo.svg';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setShow(false)
  }, [location]);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container className="pr-5 pl-2" >
          <Navbar.Brand as={NavLink} to="/" alt="MercadoCripto">
            <img src={logo} className="mb-4" alt="logo" />
          </Navbar.Brand>
          <div className="d-none d-lg-block  me-auto ">
            <Nav className="my-2 my-lg-0justify-content-evenly" style={{ maxHeight: '100px' }}>
              <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
              <Nav.Link as={NavLink} to="/converter" >Unit Converter</Nav.Link>

            </Nav>
          </div>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleShow} />
          <Navbar.Offcanvas show={show} onHide={handleClose} id="offcanvasNavbar" className="bg-light" scroll={true} aria-labelledby="offcanvasNavbarLabel" placement="start">
            <Offcanvas.Header className="shadow bg-light py-5 pl-3">
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img src={logo} className="d-inline-block align-top" alt="mercadocripto" title="mercadocripto" width="200" height="30" style={{ filter: "invert(100%)" }} />
              </Offcanvas.Title>
              <CloseButton onClick={handleClose} className="float-end mr-0" />
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="mr-auto ml-3 mt-4 pt-4 my-lg-0">
                <div className="mr-auto my-4"><Nav.Link as={NavLink} to="/" className="text-primary" onClick={handleClose}>Moedas</Nav.Link></div>
                <div className="mr-auto my-4"><Nav.Link as={NavLink} to="/converter" className="text-primary" onClick={handleClose}>Unit Converter</Nav.Link></div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  )
}
export default NavBar;