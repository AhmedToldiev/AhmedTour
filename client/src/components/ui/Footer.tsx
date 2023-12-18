import React from 'react';
import { Link } from 'react-router-dom'; // Импортируйте Link из react-router-dom
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { registrModal, loginModal } from '../../redux/slices/auth';
// import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkLogout } from '../../redux/slices/auth/checkAuthThunk';
import Logo from '../../icons/Logo';

export default function Futer(): React.JSX.Element {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: '#363030',
        borderRadius: '0 0 15px 15px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
      }}
    >
      <Container>
        <div>
          <Logo />
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand as={Link} to="/" className="nav-item slam-left text-white">
              {user.status === 'authenticated'
                ? `Добро пожаловать, ${user.name}`
                : 'Добро пожаловать, гость'}
            </Navbar.Brand>
            <NavDropdown title={<span className="text-white">Регионы</span>}>
              <NavDropdown.Item as={Link} to="#">
                Дагестан
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#">
                Чечня
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#">
                Ингушетия
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#">
                КБР
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            {user.status !== 'authenticated' ? (
              <>
                <Nav.Link
                  href="#link"
                  className="text-white"
                  onClick={() => void dispatch(loginModal())}
                >
                  Войти
                </Nav.Link>
                <Nav.Link
                  href=""
                  className="text-white"
                  onClick={() => void dispatch(registrModal())}
                >
                  Зарегистрироваться
                </Nav.Link>
              </>
            ) : (
              <Nav.Link href="" className="text-white" onClick={() => void dispatch(thunkLogout())}>
                Выйти
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
