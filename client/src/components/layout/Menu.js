import React, { Component } from 'react'

class Menu extends Component {

  closeMenu() {
    const menu = document.getElementById('menu');
    const arrow = document.getElementById('closeMenuBtn');
    if(window.innerWidth > 510) {
      menu.classList.toggle('openMenu');
      arrow.classList.toggle('displayArrow');
    } else {
      menu.classList.toggle('openMenuResponsive');
      arrow.classList.toggle('displayArrow');
    }
  }

  render() {
    return (
      <div className="Menu" id="menu">
        <i className="fas fa-arrow-right fa-2x" id="closeMenuBtn" onClick={this.closeMenu}></i>
        <ul>
          <li id="menuTitle">
            <p>Learning Resources:</p>
          </li>
          <a href="https://www.reddit.com/r/learnprogramming/" target="_blank" rel="noopener noreferrer">
            <li className="listItem">
              <i className="fab fa-reddit"></i>
              <p>Learn Programming</p>
            </li>
          </a>
          <a href="https://www.reddit.com/r/learnjavascript/" target="_blank" rel="noopener noreferrer">
            <li className="listItem">
              <i className="fab fa-reddit"></i>
              <p>Learn JavaScript</p>
            </li>
          </a>
          <a href="https://www.reddit.com/r/learnpython/" target="_blank" rel="noopener noreferrer">
            <li className="listItem">
              <i className="fab fa-reddit"></i>
              <p>Learn Python</p>
            </li>
          </a>
          <a href="https://www.reddit.com/r/learnruby/" target="_blank" rel="noopener noreferrer">
            <li className="listItem">
              <i className="fab fa-reddit"></i>
              <p>Learn Ruby</p>
            </li>
          </a>
        </ul>
      </div>
    )
  }
}

export default Menu;
