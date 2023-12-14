import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function BasicExample(): React.JSX.Element {
  return (
    <Navbar expand="lg" style={{backgroundColor: '#363030'}}>
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-white'>О нас</Nav.Link>
            <NavDropdown title="Регионы">
              <NavDropdown.Item href="#action/3.1">Дагестан</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Чечня</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ингушетия</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Кбр</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#link" className='text-white'>Войти</Nav.Link>
            <Nav.Link href="#registr" className='text-white'>Зарегистрироваться</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

