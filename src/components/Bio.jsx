import React from 'react';
import workPhoto from '../images/workPhoto.jpg';

const bio = {
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: 'honeydew',
  width: '100%',
  height: '500px',
  borderBottom: '2px solid white'
};

const paragraph = {
  alignSelf: 'center',
  margin: '20px',
  textAlign: 'justify',
  fontFamily: 'abril_fatfaceregular',
  fontSize: '1.5em',
  flexBasis: '40%',
  lineHeight: '30px',
};

const img = {
  width: '50%',
  height: '400px',
  objectFit: 'cover',
  flexBasis: '30%',
  alignSelf: 'center',
  border: '1px solid'
};

function Bio() {
  return(
    <div style={bio}>
      <img src={workPhoto} style={img} alt="image of myself at work"/>
      <p style={paragraph}>Driven and gracious self-starter with experience in front-end development, marketing and communications from various industries such as publishing, fashion and software. Known for being dependable, creative and productive, I'm seeking a position on a team driving brand engagement and experience.</p>
    </div>
  );
}

export default Bio;
