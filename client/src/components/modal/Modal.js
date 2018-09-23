import React, { Component } from 'react';
import Validator from 'validator';
import axios from 'axios';

class Modal extends Component {

  constructor() {
    super();
    this.state = {
        user: '',
        link: '',
        errors: {
          user: '',
          link: ''
        }
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.checkUsername = this.checkUsername.bind(this);
  }

  onSubmit() {
    const userInput = this.state.user;
    const linkInput = this.state.link;
    let errors = {};

    this.checkUsername(userInput);
    if (Validator.isEmpty(userInput)) {
      errors.user = 'User Field must be filled out.';
    }
     if (Validator.isEmpty(linkInput)) {
      errors.link = 'URL Field must be filled out.';
    }
     if (!Validator.isURL(linkInput)) {
      errors.link = 'The Link must be a valid URL.';
    }
     if (!linkInput.includes('github')) {
      errors.link = 'The Link must be a valid GitHub URL.';
    }
     if (errors.user || errors.link) {
      this.setState({
        errors: {
          user: errors.user,
          link: errors.link
        }
      });
    } else {
      const newIssue = {
        user: userInput,
        link: linkInput
      };
      axios.post('/api/issues', newIssue)
        .catch(err => console.log(err));
      this.setState({
        user: '',
        link: ''
      })
      document.getElementById('userInput').value = '';
      document.getElementById('urlInput').value = '';
      this.closeModal();
    }
  }

  onKeyUp(e) {
    if (e.keyCode === 13 || e.which === 13) {
      this.onSubmit();
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  closeModal() {
    const modal = document.getElementById('Modal');
    modal.style.display = 'none';
  }

  checkUsername(user) {
    fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then(data => {
        if(data.message === 'Not Found') {
          this.setState({errors: {user: 'User does not exist'}});
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Modal" id="Modal" onKeyUp={this.onKeyUp}>
        <div className="modalBody">
          <div className="modalHead">
            <h3>Add a new issue!</h3>
            <i className="fas fa-times-circle" id="closeBtn" onClick={this.closeModal}></i>
          </div>
            <div className="modalInputs">
              <input type="text" placeholder="GitHub Username:" id="userInput" name="user" ref={this.userInput} value={this.state.user} onChange={this.onChange} />
                {
                  this.state.errors.user ? <p id="userError">{this.state.errors.user}</p> : <p id="userError"></p>
                }
              <br/>
              <input type="text" placeholder="Repository URL:" id="urlInput" name="link" ref={this.linkInput} value={this.state.link} onChange={this.onChange} />
                {
                  this.state.errors.link ? <p id="linkError">{this.state.errors.link}</p> : <p id="linkError"></p>
                }
              <br/>
              <button id="submitBtn" onClick={this.onSubmit}>Submit!</button>
              <br/>
            </div>
        </div>
      </div>
    )
  }
}

export default Modal;