import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Layout = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" border="true">
        <Container size="xl">
          <Navbar.Brand href="/">
            <h1>
              <i class="fa-solid fa-recycle"></i> BemasterApp
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" >
              <Nav.Link href="/home">Inicio</Nav.Link>
              <Nav.Link className="text-danger" href="/">Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
}

export default Layout;