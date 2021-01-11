import React from 'react'
import {
  Logo,
  MenuBars,
  Nav,
  NavBtn,
  NavMenu,
  NavMenuLinks,
} from './NavbarElements'
import { menuData } from '../../data/MenuData'
import { Button } from '../Button'

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">ELIXR</Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Navbar
