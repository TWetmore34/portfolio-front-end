import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
// change the links here to link elements when we switch to react router
function Header() {
  return (
    <Navbar className='bg-custom' expand="lg">
      <Container>
        <Navbar.Brand href="/">TJ Wetmore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
                <Link to='/' className='nav-link'>Home</Link>
            </Nav.Link>
            <Nav.Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
            </Nav.Link>
            <NavDropdown className='nav-link' title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item className='nav-link' href="#action/3.1">Project 1</NavDropdown.Item>
              <NavDropdown.Item className='nav-link' href="#action/3.2">
                Project 2
              </NavDropdown.Item>
              <NavDropdown.Item className='nav-link' href="#action/3.3">Project 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className='nav-link' to='/projects'>
                    View All
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;