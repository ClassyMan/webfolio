import React, { Component } from 'react';
import logo from './computerlogo.png';
import ListOfSkills from './ListOfSkills.js';
import ListComponent from './ListComponent.js';
/**
 * This is the main menu class
 * Various information about myself is shown in
 * a collapsible manner
 */
class MainMenu extends Component {

  /**
   * This is the constructor, we set
   * initial state here and bind this
   * to any methods that might need it
   */
  constructor(props) {
    super(props);
    this.state = {showSkills: 'false'}
    this.handleSkillToggle = this.handleSkillToggle.bind(this);
  }

  /**
   * Toggle the showing of skills
   */
  handleSkillToggle() {
    this.setState({showSkills: this.toggle(this.state.showSkills)})
  }


  /**
   * Render the menu
   *
   * Ideally this should be done with a selection of
   * buttons and classes which extend ListComponent
   */
  render() {
    return <p className="App-intro">
             <button onClick={this.handleSkillToggle}>Skills</button>
             <ListOfSkills isVisible={this.state.showSkills}/>
           </p>
  }

  /**
   * Toggles 'booleans'
   */
  toggle(flag) {
    if (flag === 'true') {
      return 'false';
    } else {
      return 'true';
    }
  }
}

export default MainMenu;
