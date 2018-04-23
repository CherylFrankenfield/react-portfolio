import React from 'react';
import {Navbar,NavItem} from 'react-materialize';

function Nav() {
  return(
    <div>
      <Navbar brand='logo' left>
        <NavItem href='get-started.html'>About</NavItem>
        <NavItem href='components.html'>Work</NavItem>
        <NavItem href='components.html'>Experience</NavItem>
        <NavItem href='components.html'>Contact</NavItem>
        <NavItem href='components.html'>Resume</NavItem>
      </Navbar>
    </div>
  );
}

export default Nav;
