import React from 'react';
import {Card,CardTitle} from 'react-materialize';
import sqOne from '../../src/images/sqOne.png';
import taproom2 from '../../src/images/taproom2.png';
import zoo from '../../src/images/zoo.png';
import tamagotchi from '../../src/images/tamagotchi.png';

function Gallery() {
  return(
    <div style={styles.gallery}>
      <Card style={styles.card} header={<CardTitle reveal image={sqOne} waves='light'/>}
        title='SquirreledAway Mobile App'
        reveal={<p>Have you ever said the phrase, ‘We should do that sometime,’ but then never did? Check out the SquirreledAway app -- a social events organizer for your local bucket list. Using React Native, independently building an iOS mobile app for capstone project.</p>}>
        <p><a href='https://github.com/CherylFrankenfield/squirreledaway-planning.git'>See repo on GitHub.</a></p>
      </Card>
      <Card style={styles.card} header={<CardTitle reveal image={taproom2} waves='light'/>}
        title='Brewery Site Using React'
        reveal={
          <p>The main goal was to rebuild a Taproom project, previously built in <a href='https://github.com/CherylFrankenfield/taproom2.git'>Angular</a>, into a React app to compare/contrast the two languages and get firsthand experience in building both functional and state-based components in React.</p>
        }>
        <p><a href='https://github.com/CherylFrankenfield/react-taproom'>See repo on GitHub.</a></p>
      </Card>
      <Card style={styles.card} header={<CardTitle reveal image={zoo} waves='light'/>}
        title='Local Zoo Site Using Angular'
        reveal={<p>I built a zoo employee portal for adding new animals to the zoo, editing their details, and sorting functionality using Angular, Typescript and Bootstrap.</p>}>
        <p><a href='https://github.com/CherylFrankenfield/local-zoo'>See repo on GitHub.</a></p>
      </Card>
      <Card style={styles.card} header={<CardTitle reveal image={tamagotchi} waves='light'/>}
        title='React Tamagotchi'
        reveal={<p></p>}>
        <p><a href='https://github.com/CherylFrankenfield/react-tamagotchi'>See repo on GitHub.</a></p>
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
  },
  header: {
    alignSelf: 'center',
    margin: 5,
    padding: 2
  },
  icon: {
    color: 'black',
    overflow: 'hidden',
  },
  reveal: {
    backgroundColor: '#77ECFF',
  },
};

export default Gallery;
