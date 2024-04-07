import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>NileCity 105.6</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Hem</Nav.Link>
            <Nav.Link as={Link} to="/About/nilecity">Om projektet</Nav.Link>
            <Nav.Link as={Link} to="/Radio1">Radioprogram</Nav.Link>
            <Nav.Link as={Link} to="/Suggestions">Programförslag</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
