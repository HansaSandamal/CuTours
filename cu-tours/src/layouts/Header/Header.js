import React from "react";
import {Nav, Navbar, Container} from 'react-bootstrap'
import './_header.css';


function Header () {
    return(
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/" className="brand">
          Cu day tours
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="link">
              Home
            </Nav.Link>
            <Nav.Link href="/destinations" className="link">
              Destinations
            </Nav.Link>
            <Nav.Link href="/about" className="link">
              About
            </Nav.Link>
            <Nav.Link href="/contact" className="link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );

}
export default Header;