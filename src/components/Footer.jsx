import React from 'react';

const footer = {
  display: 'flex',
  fontSize: '20px',
  justifyContent: 'space-around',
  backgroundColor: 'grey',
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
          <li style={li}>Email: cherylfrankenfield@gmail.com</li>
          <li style={li}>Phone: 555.555.5555</li>
        </ul>
      </div>
      <div>
        <h4>Find me online:</h4>
        <ul style={ul}>
          <li style={li}>LinkedIn</li>
          <li style={li}>Instagram</li>
          <li style={li}>Twitter</li>
          <li style={li}>GitHub</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
