import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Test from './Test';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/test" component={Test} />
        </div>
      </Router>
    );
  }
}

export default App;
