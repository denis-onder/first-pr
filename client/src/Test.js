import React, { Component } from 'react';
import axios from 'axios';
import './Test.css';

class Test extends Component {

  componentDidMount() {
    axios.get('/api/issues')
    .then(res => this.setState({ issues: res.data }))
    .catch(err => console.log(err));
  }

  constructor() {
    super();
    this.state = {
      issues: [],
      user: '',
      link: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fetchIssues = this.onChange.bind(this);
  }

  fetchIssues() {
    axios.get('/api/issues')
    .then(res => this.setState({ issues: res.data }))
    .catch(err => console.log(err));
  }

  onSubmit() {
    const newIssue = {
      user: this.state.user,
      link: this.state.link
    };
    axios.post('/api/issues', newIssue)
      .catch(err => console.log(err));
    document.getElementById('userInput').value = '';
    document.getElementById('linkInput').value = '';
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  };

  render() {
    return (
      <div className="Test">
      <h1>FirstPR</h1>
        <div className="inputGroup">
          <input type="text" placeholder="User" name="user" id="userInput" value={this.state.user} onChange={this.onChange}/>
          <br/>
          <br/>
          <input type="text" placeholder="Link" name="link" id="linkInput" value={this.state.link} onChange={this.onChange}/>
          <br/>
          <br/>
          <button onClick={this.onSubmit}>Add</button>
          <br/>
          <br/>
        </div>
        <div className="output">
          {
            this.state.issues.map(issue => <div key={issue._id}>{issue.user} - {issue.link}<br /><br /></div>)
          }
        </div>
      </div>
    );
  }
}

export default Test;
