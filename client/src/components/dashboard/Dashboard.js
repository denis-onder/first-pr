import React, { Component } from 'react'
import Sidebar from '../layout/Sidebar';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
       <Sidebar />
        <h1 id="title">FirstPR</h1>
      </div>
    )
  }
}
export default Dashboard;
