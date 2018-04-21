import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

function Footer() {
  return(
    <div style={styles.footer}>
      <div>
        <h4>Contact Me:</h4>
        <ul style={styles.ul}>
          <li style={styles.li}>cherylfrankenfield@gmail.com</li>
          <li style={styles.li}>555.555.5555</li>
        </ul>
      </div>
      <div>
        <h4>Find me online:</h4>
        <List style={styles.ul}>
          <ListItem style={styles.li} primaryText='LinkedIn' />
          <ListItem style={styles.li} primaryText='Instagram'  />
          <ListItem style={styles.li} primaryText='Twitter'  />
          <ListItem style={styles.li} primaryText='GitHub' leftIcon={<ContentInbox />} />
        </List>
      </div>
    </div>
  );
}

const styles = {
  footer: {
    display: 'flex',
    fontSize: 20,
    justifyContent: 'space-around',
    backgroundColor: '#1A3A3A',
    width: '100%',
    height: 150,
    color: 'white',
    fontFamily: 'abril_fatfaceregular'
  },
  ul: {
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
  },
  li: {
    fontSize: 20,
    color: 'white',
  }
};



export default Footer;

// <ul style={styles.ul}>
//   <li style={styles.li}><a href='https://www.linkedin.com/in/cherylfrankenfield/'>LinkedIn</a></li>
//   <li style={styles.li}><a href='https://www.instagram.com/citysquirl/'>Instagram</a></li>
//   <li style={styles.li}><a href='https://twitter.com/CherylFranken'>Twitter</a></li>
//   <li style={styles.li}><a href='https://github.com/CherylFrankenfield'>GitHub</a></li>
//   <li>
//     <IconButton
//       iconClassName='muidocs-icon-custom-github'
//       tooltip='GitHub'
//       iconStyle={styles.mediumIcon}
//       style={styles.medium}
//       href='https://github.com/CherylFrankenfield'
//     />
//   </li>
// </ul>
