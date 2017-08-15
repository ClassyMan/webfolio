import React, { Component } from 'react';
import logo from './computerlogo.png';
import './App.css';
import MenuHeader from './MenuHeader.js';
import MainMenu from './MainMenu.js';

/**
 * This is the main application
 */
class App extends Component {

  /**
   * Render the main application
   */
  render() {
    return (
      <div className="App">
        <MenuHeader />
        <MainMenu showResults = 'false'/>
      </div>
    );
  }
}

export default App;
