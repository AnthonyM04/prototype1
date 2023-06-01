import { Nav, Navbar, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavMenu() {
    return(
        <Navbar bg="dark" variant="dark" expand="md">
        <Container fluid>
          <Navbar.Brand href="/"> β 1.0</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Brand>pages</Navbar.Brand>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/404">404</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}