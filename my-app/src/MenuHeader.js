import React, { Component } from 'react';
import logo from './computerlogo.png';

class MenuHeader extends Component {
  render() {
    return <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>My online resumé</h2>
            </div>
  }
}

export default MenuHeader;
