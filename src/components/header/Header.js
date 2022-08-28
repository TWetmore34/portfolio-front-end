import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

function Header({ projects }) {
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
              {projects.map((project) => (
              <NavDropdown.Item key={project.id} className='nav-link'>
                <Link to={project.path}>
                {project.title}
                </Link>
              </NavDropdown.Item>
              ))}
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