import React from 'react'
import {Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <><Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">
      <i class="fa-solid fa-cart-shopping fa-beat"></i>
        products list
      </Navbar.Brand>
    </Container>
  </Navbar></>
  )
}

export default Header