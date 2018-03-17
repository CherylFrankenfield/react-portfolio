import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Error404 from './Error404';
import Home from './Home';

function App() {
  return(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={Error404} />
    </Switch>
  );
}

export default App;
