import React, { Component } from 'react';

import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo"></div>
        <div className="drop-down"> The Coffee App</div>
      </div>
    );
  }
}

export default Header;
