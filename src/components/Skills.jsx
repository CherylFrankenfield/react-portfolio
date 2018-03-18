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
        <p style={paragraph}>
          Six months of pair programming and front end development experience with 40+ hours a week learning not only the following libraries, frameworks and tools, but how to learn how to program. During this program, I gained knowledge in reading documentation, troubleshooting problems and collaborating on teams.</p>
      </div>
      <div style={leftMid}>
        <span><i class="fas fa-tree"></i></span>
        <h3 style={header}>Marketing</h3>
        <p style={paragraph}>More than 15 years of experience in communications and marketing from various industries such as publishing, fashion and software. Most recently having worked in the domains/hosting space and attended hackathons as a sponsor, I saw firsthand the thrill of a team making a project come to life in 24-48 hours. I realized my passion was in creating, building and developing products. I am seeking a position as a front end developer on an engineering or product team.</p>
      </div>
      <div>
        <span><i class="fas fa-cubes"></i></span>
        <h3 style={header}>Skills</h3>
        <ul>
          <li>Javascript</li>
          <li>Angular</li>
          <li>API</li>
          <li>Firebase</li>
          <li>Webpack</li>
          <li>React Native</li>
          <li>Node.js</li>
        </ul>
      </div>
      <div>
        <h3 style={header}></h3>
        <ul>
          <li>SASS</li>
          <li>Bootstrap</li>
          <li>Jest</li>
          <li>Jasmine</li>
          <li>Karma</li>
          <li>jQuery</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
