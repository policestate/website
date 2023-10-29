import Link from 'next/link';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
  const changeSkin = (colorScheme) => {
    document.body.className = colorScheme;
  };

  return (
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} href="/" passHref>Home</Nav.Link>
          <Nav.Link as={Link} href="/Articles" passHref>Articles</Nav.Link>
          <Nav.Link as={Link} href="/Politics" passHref>Politics</Nav.Link>
          <NavDropdown title="Law" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} href="/Constitutional" passHref>Constitutional</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/Tort" passHref>Tort</NavDropdown.Item>
          </NavDropdown>
          
          <NavDropdown title="Change Skin" id="skin-nav-dropdown">
            <NavDropdown.Item onClick={() => changeSkin('skin-blue')}>Blue Screen</NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeSkin('skin-black')}>Black Screen</NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeSkin('skin-white')}>White Screen</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

