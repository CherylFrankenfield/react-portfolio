import React from 'react';
import {Card,CardTitle} from 'react-materialize'
import sqOne from '../../src/images/sqOne.png';

function Gallery() {
  return(
    <div style={styles.gallery}>
      <Card header={<CardTitle reveal image={sqOne} waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="#">This is a link</a></p>
      </Card>
      <Card header={<CardTitle reveal image={sqOne} waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="#">This is a link</a></p>
      </Card>
      <Card header={<CardTitle reveal image={sqOne} waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="#">This is a link</a></p>
      </Card>
      <Card header={<CardTitle reveal image={sqOne} waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="#">This is a link</a></p>
      </Card>
    </div>
  );
}

const styles = {
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderBottom: '2px solid white',
  },
  img: {
    width: '100px',
    height: 'auto',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flex: '1 18%'
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 22,
    width: '100%',
    height: '25%',
    backgroundColor: '#1A3A3A',
    color: 'white',
    fontFamily: 'sans-serif'
  },
  header: {
    alignSelf: 'center',
    margin: 5,
    padding: 2
  },
  icon: {
    color: 'black',
    fontFamily: 'sans-serif',
    overflow: 'hidden'
  }
};

export default Gallery;

// <div style={gallery}>
//   <div style={img}>
//     <div style={text}>
//       <h3 style={header}>Project: SquirreledAway Mobile App</h3>
//     </div>
//     <div style={icon}>
//       <p></p>
//     </div>
//   </div>
//   <div style={img}>
//     <div style={text}>
//       <h3>Project: Brewery Site Using React</h3>
//     </div>
//     <div style={icon}>
//       <p></p>
//     </div>
//   </div>
//   <div style={img}>
//     <div style={text}>
//       <h3>Project: Local Zoo Site Using Angular</h3>
//     </div>
//     <div style={icon}>
//       <p></p>
//     </div>
//   </div>
//   <div style={img}>
//     <div style={text}>
//       <h3>Group Project: Draftr</h3>
//     </div>
//     <div style={icon}>
//       <p></p>
//     </div>
//   </div>
// </div>
