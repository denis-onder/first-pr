import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar" id="sidebar">
        <Link to="/">
          <i className="fas fa-arrow-circle-left fa-2x"></i>
        </Link>
        <Link to="/about">
          <i className="fas fa-question-circle fa-2x"></i>
        </Link>
        <Link to="/tos">
          <i className="fas fa-info-circle fa-2x"></i>
        </Link>
      </div>
    )
  }
}
