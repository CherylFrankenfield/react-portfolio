import React from 'react';
import {Navbar,NavItem} from 'react-materialize';

function Nav() {
  return(
    <div>
      <Navbar style={nav}>
        <NavItem href='https://github.com/CherylFrankenfield'>Work</NavItem>
        <NavItem href='https://www.linkedin.com/in/cherylfrankenfield/'>Experience</NavItem>
        <NavItem href='components.html'>Resume</NavItem>
      </Navbar>
    </div>
  );
}

const nav = {
  backgroundColor: '#FC5574',
};

export default Nav;
