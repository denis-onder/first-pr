import React, { Component } from 'react';
import Sidebar from '../layout/Sidebar';

class About extends Component {

  componentDidMount() {
    document.getElementById('title').style.display = 'block';
  }

  render() {
    return (
      <div className="Dashboard">
      <Sidebar />
        <h1 id="title">About</h1>
      </div>
    )
  }
}

export default About;
