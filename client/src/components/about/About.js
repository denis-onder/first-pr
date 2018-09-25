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
        <h1 id="title">About:</h1>
        <div className="text-container">
          <p>FirstPR is an application made with beginner developers in mind.</p>
          <p>Learning how to code without any interaction with other developers, and not having any on-hand experience can make the journey a bit bland.</p>
          <p>So, this might be a solution for you. You can come here, and find issues developers post, which you might be able to fix!</p>
        </div>
      </div>
    )
  }
}

export default About;
