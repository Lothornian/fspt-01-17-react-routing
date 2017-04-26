import React, { Component } from 'react';
import Home from './Home';
import Away from './Away';
import NotFound from './NotFound';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/away" component={Away} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
