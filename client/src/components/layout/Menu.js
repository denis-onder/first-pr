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
        <ul>
          <li>
            <p>Learning Resources:</p>
          </li>
          <li>
            <i className="fab fa-reddit"></i>
            <a href="https://www.reddit.com/r/learnprogramming/" target="_blank" rel="noopener noreferrer">Learn Programming</a>
          </li>
          <li>
            <i className="fab fa-reddit"></i>
            <a href="https://www.reddit.com/r/learnjavascript/" target="_blank" rel="noopener noreferrer">Learn JavaScript</a>
          </li>
          <li>
            <i className="fab fa-reddit"></i>
            <a href="https://www.reddit.com/r/learnpython/" target="_blank" rel="noopener noreferrer">Learn Python</a>
          </li>
          <li>
            <i className="fab fa-reddit"></i>
            <a href="https://www.reddit.com/r/learnruby/" target="_blank" rel="noopener noreferrer">Learn Ruby</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu;
