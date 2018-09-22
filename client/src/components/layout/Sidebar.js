import React, {Component} from 'react'

class Sidebar extends Component {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log('Hello');
  }

  render() {
    return (
      <div className="Sidebar">
        <i className="fas fa-plus-circle fa-2x" id="addBtn" ref={this.addBtn} onClick={this.onClick}></i>
      </div>
    )
  }
}

export default Sidebar;
