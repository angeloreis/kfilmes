/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

import { FaBars } from 'react-icons/fa'

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand className="fw-bolder text-uppercase" href="/" >KFilmes</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav className="mr-auto my-1 my-lg-3 h5 text-white">
          <Nav.Link href="#about-us">Quem Somos</Nav.Link>
          <Nav.Link href="#operate-area">Área que Atuamos</Nav.Link>
          <Nav.Link href="#our-costumers">Nossos Clientes</Nav.Link>
          <Nav.Link href="#studio">Estúdio</Nav.Link>
          <Nav.Link href="#contact">Contato</Nav.Link>          
        </Nav>
      </Navbar.Collapse>
      </Container>      
    </Navbar>    
  )
}

export default Menu
