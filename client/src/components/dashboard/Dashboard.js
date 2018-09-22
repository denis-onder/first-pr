import React, { Component } from 'react'
import Sidebar from '../layout/Sidebar';
import Modal from './../modal/Modal';

class Dashboard extends Component {

  constructor() {
    super();
    this.setState = {
      issues: []
    }
    this.closeModalFromOutside = this.closeModalFromOutside.bind(this);
  }

  closeModalFromOutside(e) {
    const modal = document.getElementById('Modal');
    if (e.target === modal) {
      modal.style.display = "none";  
    }
  }

  render() {
    return (
      <div className="Dashboard" onClick={this.closeModalFromOutside}>
       <Sidebar />
        <h1 id="title">FirstPR</h1>
        <Modal />
      </div>
    )
  }
}
export default Dashboard;
