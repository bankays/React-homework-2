import React from "react";
import "./Header.scss";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <div className="Header">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">
            <img src="assets/Logo.svg" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#features">Service</Nav.Link>
              <Nav.Link href="#pricing">Article</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>

            <Nav.Link href="#deets">
              <button className="header-b1">cairt (0)</button>
            </Nav.Link>
            <Nav.Link href="#memes">
              <button className="header-b2"> Dank memes</button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
