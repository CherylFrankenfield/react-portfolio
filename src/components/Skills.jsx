import React from 'react';

const skills = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '30px 30px',
  backgroundColor: 'grey',
  width: '100%',
  height: '500px',
  borderBottom: '2px solid'
};

const header = {
  fontFamily: 'abril_fatfaceregular',
  fontSize: '2em',
  alignSelf: 'center',
  marginBottom: '20px',
};

const paragraph = {
  fontSize: '1.3em',
  textAlign: 'justify'
};

const leftMid = {
  marginRight: '20px',
  minWidth: '33%',
  display: 'flex',
  flexDirection: 'column',
};

function Skills() {
  return(
    <div style={skills}>
      <div style={leftMid}>
        <span><i class="fas fa-code"></i></span>
        <h3 style={header}>Front End Development</h3>
        <p style={paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div style={leftMid}>
        <span><i class="fas fa-tree"></i></span>
        <h3 style={header}>Marketing</h3>
        <p style={paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div>
        <span><i class="fas fa-cubes"></i></span>
        <h3 style={header}>Skills</h3>
        <p style={paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.gna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  );
}

export default Skills;
