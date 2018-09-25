import React, { Component } from 'react';
import Sidebar from '../layout/Sidebar';

export default class TermsOfService extends Component {

  componentDidMount() {
    document.getElementById('title').style.display = 'block';
  }

  render() {
    return (
      <div className="Dashboard">
        <Sidebar />
        <h1 id="title">Terms of Service:</h1>
      </div>
    )
  }
}
