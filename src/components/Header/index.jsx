import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {

  const navbarLink = {
    marginRight: "14px",
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "20px"
  }

  const link = {
    marginRight: "14px",
    textDecoration: "none",
    color: "#5a5a5a"
  }

  return (
    <Navbar
    bg="dark"
    variant="dark" 
    className="d-flex flex-row justify-content-start"
    >
        <Container>
          <Navbar><Link to="/" style={navbarLink}>João Pedro</Link></Navbar>
          <Nav className="me-auto">
            <Link to="/" style={link}>Home</Link>
            <Link to="/projetos" style={link}>Projetos</Link>
            <Link to="/contato" style={link}>Contato</Link>
          </Nav>
        </Container>
    </Navbar>
  )
}