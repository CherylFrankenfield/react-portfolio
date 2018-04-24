import React from 'react';
import FontAwesome from 'react-fontawesome';

function Skills() {
  return(
    <div style={skills}>
      <div style={leftMid}>
        <FontAwesome name='fas fa-code' size='4x' style={icon}/>
        <h3 style={header}>Front End Development</h3>
        <p style={paragraph}>
          <span style={dropcap}>D</span>riven self-starter with experience in front end development, most recently developing in React and React Native. Known for being dependable, creative and productive, I'm seeking a position on a team driving brand engagement and experience. Comfortable with pair programming, reading documentation, troubleshooting problems and collaborating on teams.</p>
      </div>
      <div style={leftMid}>
        <FontAwesome name='fas fa-tree' size='4x' style={icon}/>
        <h3 style={header}>Marketing</h3>
        <p style={paragraph}>
          <span style={dropcap}>M</span>ore than 15 years of experience in communications and marketing from various industries such as publishing, fashion and software. Most recently having worked in the domains/hosting space and having attended hackathons as a sponsor, I saw firsthand the thrill of making a project come to life in 24-48 hours. I realized my passion was in creating, building and developing products.</p>
      </div>
      <div style={leftMid}>
        <FontAwesome name='fas fa-cubes' size='4x' style={icon}/>
        <h3 style={header}>Skills</h3>
        <p style={paragraph}>
          <span style={dropcap}>R</span>eact • React Native • Redux • JavaScript • CSS • Angular • API • Firebase • Webpack • SASS • Bootstrap • Jest • Jasmine • Karma • jQuery • Git • ES6 • Typescript • QA • Project Management • Adobe Creative Suite • JIRA
        </p>
      </div>
    </div>
  );
}


const skills = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '30px 30px',
  backgroundColor: '#FF8A5B',
  width: '100%',
  height: '900px',
  borderBottom: '2px solid',
  color: 'white',
};

const header = {
  fontFamily: 'Roboto',
  fontSize: '40px',
  alignSelf: 'center',
  marginBottom: '20px',
  color: '#77ECFF',
};

const icon = {
  textAlign: 'center',
  color: '#77ECFF',
};

const dropcap = {
  color: '#77ECFF',
  float: 'left',
  fontFamily: 'Roboto',
  fontSize: '75px',
  lineHeight: '60px',
  paddingTop: '4px',
  paddingRight: '8px',
  paddingLeft: '3px',
};

const paragraph = {
  fontSize: '26px',
  textAlign: 'justify',
  color: 'white',
};

const leftMid = {
  marginRight: '40px',
  minWidth: '30%',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
};

export default Skills;

// <ul>
//   <li>Javascript</li>
//   <li>Angular</li>
//   <li>API</li>
//   <li>Firebase</li>
//   <li>Webpack</li>
//   <li>React Native</li>
//   <li>Node.js</li>
// </ul>
// </div>
// <div>
// <h3 style={header}></h3>
// <ul>
//   <li>SASS</li>
//   <li>Bootstrap</li>
//   <li>Jest</li>
//   <li>Jasmine</li>
//   <li>Karma</li>
//   <li>jQuery</li>
// </ul>
