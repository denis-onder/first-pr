import React, { Component } from 'react'

class Menu extends Component {

  closeMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('openMenu');
  }

  render() {
    return (
      <div className="Menu" id="menu">
        <i className="fas fa-arrow-right fa-2x" id="closeMenuBtn" onClick={this.closeMenu}></i>
      </div>
    )
  }
}

export default Menu;
