import React, { Component } from 'react';
import Menu from '../layout/Menu';
import Modal from './../modal/Modal';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      issues: []
    }
    this.closeModalFromOutside = this.closeModalFromOutside.bind(this);
    this.fetchIssues = this.fetchIssues.bind(this);
    this.refetchIssues = this.refetchIssues.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  fetchIssues() {
    axios.get('/api/issues')
      .then(res => this.setState({ issues: res.data }))
      .catch(err => console.log(err));
  }

  refetchIssues() {
    this.setState({issues: []});
    document.getElementById('output').style.display = 'none';
    document.getElementById('title').style.display = 'none';
    document.getElementById('menuBtn').style.display = 'none';
    document.getElementById('Spinner').style.display = 'flex';
    axios.get('/api/issues')
      .then(res => this.setState({ issues: res.data }))
      .catch(err => console.log(err));
    setTimeout(() => {
      document.getElementById('Spinner').style.display = 'none';
      document.getElementById('output').style.display = 'grid';
      document.getElementById('title').style.display = 'block';
      document.getElementById('menuBtn').style.display = 'block';
    }, 2750)
  }
  
  openModal() {
    const modal = document.getElementById('Modal');
    modal.style.display = 'block';
  }

  closeModalFromOutside(e) {
    const modal = document.getElementById('Modal');
    if (e.target === modal) {
      modal.style.display = "none";  
    }
  }

  openMenu() {
    const menu = document.getElementById('menu');
    const arrow = document.getElementById('closeMenuBtn');
    if(window.innerWidth > 510) {
      menu.classList.toggle('openMenu');
      arrow.classList.toggle('displayArrow');
    } else {
      menu.classList.toggle('openMenuResponsive');
      arrow.classList.toggle('displayArrow');
    }
  }

  componentDidMount() {
    this.fetchIssues();
    setTimeout(() => {
      document.getElementById('Spinner').style.display = 'none';
      document.getElementById('output').style.visibility = 'visible';
      document.getElementById('title').style.display = 'block';
      document.getElementById('menuBtn').style.display = 'block';
      document.getElementById('Spinner').classList = 'spinnerBackground';
    }, 2750)
  }

  render() {
    return (
      <div className="Dashboard" onClick={this.closeModalFromOutside}>
        <Menu />
        <div className="wrapper">
          <div id="Spinner">
              <div className="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="Sidebar">
              <i className="fas fa-plus-circle fa-2x" id="addBtn" ref={this.addBtn} onClick={this.openModal}></i>
              <i className="fas fa-sync-alt fa-2x" onClick={this.refetchIssues}></i>
              <Link to="/about">
                <i className="fas fa-question-circle fa-2x"></i>
              </Link>
            </div>
            <div id="title">
              <h1>FirstPR</h1>
              <p><b>Your First Pull Request.</b></p>
            </div>
            <i className="fas fa-bars fa-2x" id="menuBtn" onClick={this.openMenu}></i>
            <Modal />
            <div id="output">
            {
              this.state.issues.map(issue =>
                <div className="outputDiv" key={issue._id} id={issue._id}>
                  <div className="outputGroup">
                    <i className="fas fa-user"></i>
                    <p>{issue.user}</p>
                  </div>
                  <br/>
                  <div className="outputGroup">
                    <i className="fas fa-pen"></i>
                    <p>{issue.description}</p>
                  </div>
                  <br/>
                {
                  issue.link.includes('https://') 
                  ? 
                  <div className="outputGroup">
                    <i className="fas fa-link"></i>
                    <a href={issue.link} target="_blank" rel="noopener noreferrer">{issue.link}</a>
                  </div>
                  :
                  <div className="outputGroup">
                    <i className="fas fa-link"></i>
                    <a href={`https://${issue.link}`} target="_blank" rel="noopener noreferrer">{`https://${issue.link}`}</a>
                  </div>
                }
                </div>
              )
            }
            </div>
          </div>
        </div>
    )
  }
}


export default Dashboard;
