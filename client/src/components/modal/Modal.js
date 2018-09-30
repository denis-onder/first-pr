import React, { Component } from 'react';
import Validator from 'validator';
import axios from 'axios';

class Modal extends Component {

  constructor() {
    super();
    this.state = {
        user: '',
        link: '',
        description: '',
        errors: {
          user: '',
          link: '',
          description: '',
        }
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onSubmit() {
    const userInput = this.state.user;
    const linkInput = this.state.link;
    const descriptionInput = this.state.description;
    let errors = {};
    this.setState({
      user: '',
      link: '',
      description: ''
    });
    if (Validator.isEmpty(userInput)) {
      errors.user = 'User Field must be filled out.';
    }
    if (Validator.isEmpty(descriptionInput)) {
      errors.description = 'Description Field must be filled out.';
    }
    if (Validator.isEmpty(linkInput)) {
      errors.link = 'URL Field must be filled out.';
    }
    if (!Validator.isURL(linkInput)) {
      errors.link = 'The Link must be a valid URL.';
    }
    if (!linkInput.includes('github.com')) {
      errors.link = 'The Link must be a valid GitHub URL.';
    }
    if (errors.user || errors.link || errors.description) {
      this.setState({
        errors: {
          user: errors.user,
          link: errors.link,
          description: errors.description
        }
      });
    } else {
      this.clearErrors();
      const newIssue = {
        user: userInput,
        link: linkInput,
        description: descriptionInput
      };
      axios.post('/api/issues', newIssue)
        .catch(err => console.log(err));
      document.getElementById('userInput').value = '';
      document.getElementById('urlInput').value = '';
      document.getElementById('descriptionInput').value = '';
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

  clearErrors() {
    const userError = document.getElementById('userError');
    const linkError = document.getElementById('linkError');
    const descriptionError = document.getElementById('descriptionError');
    userError.innerHTML = '';
    linkError.innerHTML = '';
    descriptionError.innerHTML = '';
  }

  render() {
    return (
      <div className="Modal" id="Modal" onKeyUp={this.onKeyUp}>
        <div className="modalBody" id="modalBody">
          <div className="modalHead">
            <h3>Add a new issue!</h3>
            <i className="fas fa-times-circle" id="closeBtn" onClick={this.closeModal}></i>
          </div>
            <div className="modalInputs">
              <input type="text" className="inputs" placeholder="GitHub Username:" id="userInput" name="user" ref={this.userInput} value={this.state.user} onChange={this.onChange} />
                {
                  this.state.errors.user ? <p className="errors" id="userError">{this.state.errors.user}</p> : <p id="userError"></p>
                }
              <input type="text" className="inputs" placeholder="Description:" id="descriptionInput" name="description" ref={this.descriptionInput} value={this.state.description} onChange={this.onChange} />
                {
                  this.state.errors.description ? <p className="errors" id="descriptionError">{this.state.errors.description}</p> : <p id="descriptionError"></p>
                }
              <input type="text" className="inputs" placeholder="Repository URL:" id="urlInput" name="link" ref={this.linkInput} value={this.state.link} onChange={this.onChange} />
                {
                  this.state.errors.link ? <p className="errors" id="linkError">{this.state.errors.link}</p> : <p id="linkError"></p>
                }
              <button id="submitBtn" onClick={this.onSubmit}>Submit!</button>
              <br/>
            </div>
        </div>
      </div>
    )
  }
}

export default Modal;