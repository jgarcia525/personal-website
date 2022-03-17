import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/navigation.css';

const NavigationBar = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const toggleShowOffCanvas = () => setShowOffCanvas(!showOffCanvas);

  return (
    <Navbar id='navbar' sticky='top' variant='dark' expand={false}>
      <Container fluid className='navbar-container'>
        <Navbar.Brand id='navbar-brand' as={Link} to='/'>
          Jorge Garcia
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='offcanvasNavbar'
          onClick={toggleShowOffCanvas}
        />
        <Navbar.Offcanvas
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
          placement='end'
          show={showOffCanvas}
        >
          <Offcanvas.Header
            closeButton={true}
            closeVariant={'white'}
            closeLabel={'close button'}
            onHide={toggleShowOffCanvas}
          ></Offcanvas.Header>
          <Offcanvas.Body id='off-canvas-body'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/about' onClick={toggleShowOffCanvas}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to='/projects' onClick={toggleShowOffCanvas}>
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to='/contact' onClick={toggleShowOffCanvas}>
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
