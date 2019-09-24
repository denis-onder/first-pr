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
    try {
      const res = await axios.get("http://localhost:8000/api/issues");
      this.setState({ issues: res.data });
    } catch (error) {
      console.error(error);
    }
  }

  refetchIssues() {
    this.setState({ issues: [] });
    document.body.style.overflow = "hidden";
    document.getElementById("output").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("menuBtn").style.display = "none";
    document.getElementById("Spinner").style.display = "flex";
    axios
      .get("http://localhost:8000/api/issues")
      .then(res => this.setState({ issues: res.data }))
      .catch(err => console.log(err));
    setTimeout(() => {
      document.body.style.overflow = "auto";
      document.getElementById("Spinner").style.display = "none";
      document.getElementById("output").style.display = "grid";
      document.getElementById("title").style.display = "block";
      document.getElementById("menuBtn").style.display = "block";
    }, 2750);
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

  componentDidMount() {
    document.body.style.overflow = "hidden";
    this.fetchIssues();
    setTimeout(() => {
      document.body.style.overflow = "auto";
      document.getElementById("Spinner").style.display = "none";
      document.getElementById("output").style.visibility = "visible";
      document.getElementById("title").style.display = "block";
      document.getElementById("menuBtn").style.display = "block";
    }, 2750);
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
        {localStorage.getItem("nightMode") ? (
          <i
            id="nightModeBtn"
            className="nightMode fas fa-sun fa-2x"
            onClick={this.clearNightMode}
          ></i>
        ) : (
          <i
            id="nightModeBtn"
            className="nightMode fas fa-moon fa-2x"
            onClick={this.nightMode}
          ></i>
        )}
      </div>
    );
  }
}

export default Dashboard;
