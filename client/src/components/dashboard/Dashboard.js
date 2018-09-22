import React, { Component } from 'react'
import Sidebar from '../layout/Sidebar';
import Modal from './../modal/Modal';
import axios from 'axios';

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

  componentDidMount() {
    axios.get('/api/issues')
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    setTimeout(() => {
      document.getElementById('Spinner').style.display = 'none';
      document.getElementById('title').style.display = 'block';
    }, 3000)
  }

  render() {
      return (
        <div className="Dashboard" onClick={this.closeModalFromOutside}>
        <div id="Spinner">
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
          <Sidebar />
          <h1 id="title">FirstPR</h1>
          <Modal />
        </div>
      )
  }
}
export default Dashboard;
