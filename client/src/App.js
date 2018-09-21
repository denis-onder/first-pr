import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  componentDidMount() {
    axios.get('/api/issues')
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
      </div>
    );
  }
}

export default App;
