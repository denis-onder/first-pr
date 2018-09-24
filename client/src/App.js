import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import About from './components/about/About';
import TermsOfService from './components/tos/TermsOfService';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/about" component={About} />
          <Route exact path="/tos" component={TermsOfService} />
        </div>
      </Router>
    );
  }
}

export default App;
