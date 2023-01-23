import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <Navbar
    bg="dark"
    variant="dark" 
    className="d-flex flex-row justify-content-start"
    >
        <Container>
          <Navbar><Link to="/" style={{marginRight: "14px", textDecoration: "none", color: "#ffffff", fontSize: "20px"}}>João Pedro</Link></Navbar>
          <Nav className="me-auto">
            <Link to="/" style={{marginRight: "14px", textDecoration: "none", color: "#5a5a5a"}}>Home</Link>
            <Link to="/projetos" style={{marginRight: "14px", textDecoration: "none", color: "#5a5a5a"}}>Projetos</Link>
            <Link to="/contato" style={{textDecoration: "none", color: "#5a5a5a"}}>Contato</Link>
          </Nav>
        </Container>
    </Navbar>
  )
}