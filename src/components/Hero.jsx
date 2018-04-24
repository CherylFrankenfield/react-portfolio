import React from 'react';
import baker from '../images/baker.jpg';

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
  fontSize: '30px',
  marginLeft: '50px',
  width: '70%',
  letterSpacing: '2px',
  lineHeight: '40px',
  marginBottom: '200px',
  color: 'white',
};

const header = {
  fontFamily: 'Roboto',
  fontSize: '100px',
  width: '100%',
  marginLeft: '50px',
  color: 'white',
};

export default Hero;
