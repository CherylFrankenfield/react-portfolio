import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import sqOne from '../../src/images/sqOne.png';

function Gallery() {
  return(
    <div style={styles.gallery}>
      <div>
        <Card>
          <CardHeader
            title='Project: SquirreledAway'
            subtitle='React Native Mobile App'
            avatar="images/jsa-128.jpg"
            />
          <CardMedia
            overlay={<CardTitle title='Project: SquirreledAway' subtitle='React Native Mobile App' />}
            >
            <img src={sqOne} style={styles.img} alt='Snapshot of SquirreledAway mobile app login screen.' />
          </CardMedia>
          <CardTitle title='Project: SquirreledAway' subtitle='React Native Mobile App' />
          <CardText>
            Have you ever said the phrase, ‘We should do that sometime,’ but then never did? Check out the SquirreledAway app -- a social events organizer for your local bucket list. Using React Native, independently building an iOS mobile app for capstone project. For more information, please find the GitHub repo <a href='https://github.com/CherylFrankenfield/squirreledaway-planning.git'>here.</a>
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
          </CardActions>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader
            title='Project: Brewery Site Using React'
            subtitle="Subtitle"
            avatar="images/jsa-128.jpg"
            />
          <CardMedia
            overlay={<CardTitle title='Project: Brewery Site Using React' subtitle="Overlay subtitle" />}
            >
            <img src="images/nature-600-337.jpg" alt="" />
          </CardMedia>
          <CardTitle title='Project: Brewery Site Using React' subtitle="Card subtitle" />
          <CardText>
            The main goal was to rebuild a Taproom project (previously built in Angular <a href='https://github.com/CherylFrankenfield/taproom2.git'>here</a>) into a React app to compare/contrast the two languages and get firsthand experience in building both functional and state-based components in React.
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
          </CardActions>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar="images/jsa-128.jpg"
            />
          <CardMedia
            overlay={<CardTitle title='Project: Local Zoo Site Using Angular' subtitle="Overlay subtitle" />}
            >
            <img src="images/nature-600-337.jpg" alt="" />
          </CardMedia>
          <CardTitle title='Project: Local Zoo Site Using Angular' subtitle="Card subtitle" />
          <CardText>
            I built a zoo employee portal for adding new animals to the zoo, editing their details, and sorting functionality using Angular, Typescript and Bootstrap.
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
          </CardActions>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar="images/jsa-128.jpg"
            />
          <CardMedia
            overlay={<CardTitle title='Group Project: Draftr' subtitle="Overlay subtitle" />}
            >
            <img src="images/nature-600-337.jpg" alt="" />
          </CardMedia>
          <CardTitle title='Group Project: Draftr' subtitle="Card subtitle" />
          <CardText>
            As part of our group week in Javascript, a team of four built an app for signing up for and tracking code school projects. This application was built using Angular5 with Firestore. Specifically, my pair partner and I built out component functionality to display projects in different views and a lot of the CRUD functionality with updating/deleting in edit/delete buttons.
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
          </CardActions>
        </Card>
      </div>
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
