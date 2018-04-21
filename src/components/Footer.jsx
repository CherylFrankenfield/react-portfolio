import React from 'react';

const footer = {
  display: 'flex',
  fontSize: '20px',
  justifyContent: 'space-around',
  backgroundColor: '#1A3A3A',
  width: '100%',
  height: '150px',
  color: 'white',
  fontFamily: 'abril_fatfaceregular'
};
const ul = {
  display: 'flex',
  justifyContent: 'space-between',
  listStyle: 'none',
};

const li = {
  padding: '20px',
  marginRight: '20px'
};


function Footer() {
  return(
    <div style={footer}>
      <div>
        <h4>Contact Me:</h4>
        <ul style={ul}>
          <li style={li}>cherylfrankenfield@gmail.com</li>
          <li style={li}>555.555.5555</li>
        </ul>
      </div>
      <div>
        <h4>Find me online:</h4>
        <ul style={ul}>
          <li style={li}><a href='https://www.linkedin.com/in/cherylfrankenfield/'>LinkedIn</a></li>
          <li style={li}><a href='https://www.instagram.com/citysquirl/'>Instagram</a></li>
          <li style={li}><a href='https://twitter.com/CherylFranken'>Twitter</a></li>
          <li style={li}><a href='https://github.com/CherylFrankenfield'>GitHub</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
