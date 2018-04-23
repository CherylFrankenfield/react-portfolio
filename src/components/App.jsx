import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Error404 from './Error404';
import Home from './Home';
import Nav from './Nav';
import FooterComp from './FooterComp';

function App() {
  return(
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Error404} />
      </Switch>
      <FooterComp />
    </div>
  );
}

export default App;
