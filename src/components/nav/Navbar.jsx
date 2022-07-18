import React, { useState } from 'react'

import Nav, { Logo, MenuLink, Menu, Hamburger } from './Nav.style'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">
        <i>{'<Selman/>'}</i>
        <span>Recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>
      <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="login">Logout</MenuLink>
      </Menu>
    </Nav>
  )
}

export default Navbar
