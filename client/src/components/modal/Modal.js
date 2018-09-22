import React, { Component } from 'react'

class Modal extends Component {

  constructor() {
    super();
    this.state = {
        user: '',
        link: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    console.log({user: this.state.user, link: this.state.link});
    this.setState({
      user: '',
      link: ''
    })
    document.getElementById('userInput').value = '';
    document.getElementById('urlInput').value = '';
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="Modal">
        <div className="modalBody">
          <div className="modalHead">
            <h3>Add a new issue!</h3>
            <i className="fas fa-times-circle" id="closeBtn"></i>
          </div>
            <div className="modalInputs">
              <input type="text" placeholder="GitHub Username:" id="userInput" name="user" ref={this.userInput} value={this.state.user} onChange={this.onChange} />
              <br/>
              <input type="text" placeholder="Repository URL:" id="urlInput" name="link" ref={this.linkInput} value={this.state.link} onChange={this.onChange} />
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