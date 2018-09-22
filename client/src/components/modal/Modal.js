import React, { Component } from 'react'

class Modal extends Component {
  render() {
    return (
      <div className="Modal">
        <div className="modalBody">
          <div className="modalHead">
            <h3>Add a new issue!</h3>
            <i className="fas fa-times-circle" id="closeBtn"></i>
          </div>
            <div className="inputGroup">
              <input type="text"/>
              <br/>
              <input type="text"/>
              <br/>
              <button id="submitBtn">Submit!</button>
            </div>
        </div>
      </div>
    )
  }
}

export default Modal;