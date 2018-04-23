import React from 'react';
import baker from '../images/baker.jpg';

const hero = {
  backgroundImage: 'url('+ baker +')',
  overflow: 'hidden',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100%',
  height: '800px',
  borderBottom: '2px solid white'
};

const paragraph = {
  fontFamily: 'Roboto',
  fontSize: '2em',
  marginLeft: '50px',
  width: '70%',
  letterSpacing: '2px',
  lineHeight: '40px',
  marginBottom: '140px'
};

const header = {
  fontFamily: 'Roboto',
  fontSize: '5em',
  width: '100%',
  marginLeft: '50px'
};

function Hero() {
  return(
    <div style={hero}>
      <div>
        <h1 style={header}>Hello. Nice to meet you.</h1>
        <p style={paragraph}>I'm Cheryl Frankenfield and I'm a web developer based in the Pacific Northwest. I welcome you to take a look at my work and drop me a message.</p>
      </div>
    </div>
  );
}

export default Hero;
