import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

// Simple Bootstrap Navbar
export default function MyNavbar() {
  return (
    <Navbar expand="lg"  style={{
    background: "linear-gradient(90deg, #007bff, #6610f2)", // gradient blue to purple
  }}
  variant="dark" sticky="top">
      <Container>
        <Navbar.Brand >Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
