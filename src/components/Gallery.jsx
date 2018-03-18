import React from 'react';

const gallery = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  borderBottom: '2px solid white',
};

const img = {
  width: '100%',
  minWidth: '310px',
  height: '350px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  flex: '1 18%'
};

const text = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.4em',
  width: '100%',
  height: '25%',
  backgroundColor: 'blue',
  fontFamily: 'sans-serif'
};

const header = {
  alignSelf: 'center',
  margin: '5px',
  padding: '2px'
};

const icon = {
  color: 'black',
  fontFamily: 'sans-serif',
  overflow: 'hidden'
};

function Gallery() {
  return(
    <div style={gallery}>
      <div style={img}>
        <div style={text}>
          <h3 style={header}>Project: SquirreledAway Mobile App</h3>
        </div>
        <div style={icon}>
          <p></p>
        </div>
      </div>
      <div style={img}>
        <div style={text}>
          <h3>Project: Brewery Site Using React</h3>
        </div>
        <div style={icon}>
          <p></p>
        </div>
      </div>
      <div style={img}>
        <div style={text}>
          <h3>Project: Local Zoo Site Using Angular</h3>
        </div>
        <div style={icon}>
          <p></p>
        </div>
      </div>
      <div style={img}>
        <div style={text}>
          <h3>Group Project: Draftr</h3>
        </div>
        <div style={icon}>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
