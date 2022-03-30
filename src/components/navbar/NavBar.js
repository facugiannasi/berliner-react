import Navbar from 'react-bootstrap/Navbar'
import React from 'react'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-BerlinerApp</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Nosotros</Nav.Link>
        <NavDropdown title="Contactame" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Productos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Mas vendidos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Muestras</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar