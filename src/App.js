import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar id='navbar' sticky='top' variant='dark' expand={false}>
        <Container
          fluid
          style={{
            marginLeft: '1rem',
            marginRight: '1rem',
            fontSize: '1.25rem',
          }}
        >
          <Navbar.Brand id='navbar-brand' as={Link} to='/'>
            Jorge Garcia
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='offcanvasNavbar' />
          <Navbar.Offcanvas
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
            placement='end'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel'>
                Jorge Garcia
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body id='off-canvas-body'>
              <Nav className='me-auto'>
                <Nav.Link as={Link} to='/'>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to='/about'>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to='/projects'>
                  Projects
                </Nav.Link>
                <Nav.Link as={Link} to='/contact'>
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
