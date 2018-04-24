import React from 'react';
import workPhoto from '../images/workPhoto.jpg';

function Bio() {
  return(
    <div style={bio}>
      <img src={workPhoto} style={img} alt='image of myself at work'/>
      <p style={paragraph}>
        <span style={dropcap}>D</span>riven self-starter with experience in front end development, marketing and communications from various industries such as publishing, fashion and software. Known for being dependable, creative and productive, I'm seeking a position on a team driving brand engagement and experience.</p>
    </div>
  );
}

const bio = {
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: '#FCEADE',
  width: '100%',
  height: '700px',
  borderBottom: '2px solid white'
};

const paragraph = {
  alignSelf: 'center',
  margin: '20px',
  textAlign: 'justify',
  fontFamily: 'Roboto',
  fontSize: '35px',
  flexBasis: '40%',
  lineHeight: '1.2',
  color: '#FF8A5B',
};

const img = {
  width: '50%',
  height: '600px',
  objectFit: 'cover',
  flexBasis: '30%',
  alignSelf: 'center',
  border: '1px solid black'
};

const dropcap = {
  color: '#FF8A5B',
  float: 'left',
  fontFamily: 'Roboto',
  fontSize: '75px',
  lineHeight: '60px',
  paddingTop: '4px',
  paddingRight: '8px',
  paddingLeft: '3px',
};

export default Bio;
