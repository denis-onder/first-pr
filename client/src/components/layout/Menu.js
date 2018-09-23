import React, { Component } from 'react'

class Menu extends Component {

  closeMenu() {
    const menu = document.getElementById('menu');
    const arrow = document.getElementById('closeMenuBtn');
    menu.classList.toggle('openMenu');
    arrow.classList.toggle('displayArrow');
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
