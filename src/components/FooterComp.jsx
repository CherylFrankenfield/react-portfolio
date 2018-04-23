import React from 'react';
import {Footer} from 'react-materialize';

function FooterComp() {
  return(
    <div>
      <Footer copyrights='© 2018 Cheryl Frankenfield'
        links={
          <ul>
            <li><a className='grey-text text-lighten-3' href='https://www.linkedin.com/in/cherylfrankenfield/'>LinkedIn</a></li>
            <li><a className='grey-text text-lighten-3' href='https://www.instagram.com/citysquirl/'>Instagram</a></li>
            <li><a className='grey-text text-lighten-3' href='https://twitter.com/CherylFranken'>Twitter</a></li>
            <li><a className='grey-text text-lighten-3' href='https://github.com/CherylFrankenfield'>GitHub</a></li>
          </ul>
        }
        className='example'
      >
        <h5 className='white-text'>Find me online.</h5>
        <p className='grey-text text-lighten-4'>cherylfrankenfield@gmail.com</p>
      </Footer>;
    </div>
  );
}

export default FooterComp;
