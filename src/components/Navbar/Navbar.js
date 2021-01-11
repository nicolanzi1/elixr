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

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to="/">ELIXR</Logo>
      <MenuBars onClick={toggle} />
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
