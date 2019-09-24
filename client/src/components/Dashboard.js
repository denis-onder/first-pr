import React, { Component } from "react";
import Menu from "./layout/Menu";
import Modal from "./Modal";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      modal: null,
      issues: []
    };
    this.openModal = this.openModal.bind(this);
    this.fetchIssues = this.fetchIssues.bind(this);
    this.refetchIssues = this.refetchIssues.bind(this);
  }

  async fetchIssues() {
    console.log(this.state.issues);
    try {
      const res = await axios.get("http://localhost:8000/api/issues");
      this.setState({ issues: res.data });
    } catch (error) {
      console.error(error);
    }
  }

  async refetchIssues() {
    this.setState({ issues: [] });
    this.showSpinner();
    await this.fetchIssues();
    this.hideSpinner();
  }

  showSpinner() {
    document.body.style.overflow = "hidden";
    document.getElementById("output").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("menuBtn").style.display = "none";
    document.getElementById("Spinner").style.display = "flex";
  }

  hideSpinner() {
    document.body.style.overflow = "auto";
    document.getElementById("Spinner").style.display = "none";
    document.getElementById("output").style.display = "grid";
    document.getElementById("title").style.display = "block";
    document.getElementById("menuBtn").style.display = "block";
  }

  openModal() {
    this.modal.style.display = "block";
  }

  closeModalFromOutside(e) {
    const modal = document.getElementById("Modal");
    if (e.target === modal) {
      modal.style.display = "none";
    }
  }

  openMenu() {
    const menu = document.getElementById("menu");
    const arrow = document.getElementById("closeMenuBtn");
    if (window.innerWidth > 510) {
      menu.classList.toggle("openMenu");
      arrow.classList.toggle("displayArrow");
    } else {
      menu.classList.toggle("openMenuResponsive");
      arrow.classList.toggle("displayArrow");
    }
  }

  async componentDidMount() {
    document.body.style.overflow = "hidden";
    await this.fetchIssues();
    this.hideSpinner();
    this.modal = document.getElementById("Modal");
  }

  render() {
    return (
      <div
        className="Dashboard"
        id="dashboard"
        onClick={this.closeModalFromOutside}
      >
        <Menu />
        <div className="wrapper">
          <div id="Spinner">
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="Sidebar" id="sidebar">
            <i
              className="fas fa-plus-circle fa-2x"
              id="addBtn"
              ref={this.addBtn}
              onClick={this.openModal}
            ></i>
            <i
              className="fas fa-sync-alt fa-2x"
              onClick={this.refetchIssues}
            ></i>
          </div>
          <div id="title">
            <h1>FirstPR</h1>
            <p>
              <b>Your First Pull Request.</b>
            </p>
          </div>
          <i
            className="fas fa-bars fa-2x"
            id="menuBtn"
            onClick={this.openMenu}
          ></i>
          <Modal />
          <div id="output">
            {this.state.issues.map(issue => (
              <div className="outputDiv" key={issue._id} id={issue._id}>
                <div className="outputGroup">
                  <i className="fas fa-user"></i>
                  <a href={`https://github.com/${issue.user}`} target="_blank">
                    {issue.user}
                  </a>
                </div>
                <br />
                <div className="outputGroup">
                  <i className="fas fa-pen"></i>
                  <p>{issue.description}</p>
                </div>
                <br />
                {issue.link.includes("https://") ? (
                  <div className="outputGroup">
                    <i className="fas fa-link"></i>
                    <a
                      href={issue.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {issue.link}
                    </a>
                  </div>
                ) : (
                  <div className="outputGroup">
                    <i className="fas fa-link"></i>
                    <a
                      href={`https://${issue.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >{`https://${issue.link}`}</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
