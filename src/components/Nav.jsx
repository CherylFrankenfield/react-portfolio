import React from 'react';

const navContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'navy',
  color: 'white',
};
const ul = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  listStyle: 'none',
};

const li = {
  alignSelf: 'center',
  marginRight: '40px',
  padding: '20px',
  textTransform: 'uppercase',
  fontSize: '16px'
};

function Nav() {
  return(
    <div style={navContainer}>
      <ul style={ul}>
        <li style={li}>About</li>
        <li style={li}>Work</li>
        <li style={li}>Experience</li>
        <li style={li}>Contact</li>
      </ul>
    </div>
  );
}

export default Nav;
