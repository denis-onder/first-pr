import React, { Component } from 'react'
import Sidebar from '../layout/Sidebar';
import Menu from '../layout/Menu';
import Modal from './../modal/Modal';
import axios from 'axios';

class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      issues: []
    }
    this.closeModalFromOutside = this.closeModalFromOutside.bind(this);
    this.fetchIssues = this.fetchIssues.bind(this);
  }

  closeModalFromOutside(e) {
    const modal = document.getElementById('Modal');
    if (e.target === modal) {
      modal.style.display = "none";  
    }
  }

  fetchIssues() {
    axios.get('/api/issues')
      .then(res => this.setState({ issues: res.data }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.fetchIssues();
    setTimeout(() => {
      document.getElementById('Spinner').style.display = 'none';
      document.getElementById('title').style.display = 'block';
      document.getElementById('output').style.display = 'block';
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
          <div id="output">
            {
              this.state.issues.map(issue => (
                <div key={issue._id} id={issue._id}>
                  <p>{issue.user}</p>
                  <a href={issue.link} target="_blank">{issue.link}</a>
                </div>
              ))
            }
          </div>
        </div>
      )
  }
}
export default Dashboard;
