import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Error404 from './Error404';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

function App() {
  return(
    <MuiThemeProvider>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
