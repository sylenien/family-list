import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import styled from 'styled-components';

import Home from './Home';
import Add from '../containers/Add';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={Add} />
        </div>
      </Router>
    );
  }
}

export default App;
