import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Test from './Test';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';
import Modal from './components/modal/Modal';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/modal" component={Modal} />
        </div>
      </Router>
    );
  }
}

export default App;
