import React, {Component} from 'react'

class Sidebar extends Component {

  constructor() {
    super();
    this.openModal = this.openModal.bind(this);
  }
  
  openModal() {
    const modal = document.getElementById('Modal');
    modal.style.display = 'block';
  }

  render() {
    return (
      <div className="Sidebar">
        <i className="fas fa-plus-circle fa-2x" id="addBtn" ref={this.addBtn} onClick={this.openModal}></i>
      </div>
    )
  }
}

export default Sidebar;
