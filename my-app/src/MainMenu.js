import React, { Component } from 'react';
import logo from './computerlogo.png';
import ListOfSkills from './ListOfSkills.js';
import ListOfQualifications from './ListOfQualifications.js';
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
    this.state = {showSkills: 'false',
                  showQualifications: 'false'}
    this.handleSkillToggle = this.handleSkillToggle.bind(this);
    this.handleQualificationsToggle = this.handleQualificationsToggle.bind(this);
  }

  /**
   * Toggle the showing of skills
   */
  handleSkillToggle() {
    this.setState({showSkills: this.toggle(this.state.showSkills)})
  }

  /**
   * Toggle the showing of Qualifications
   */
  handleQualificationsToggle() {
    this.setState({showQualifications: this.toggle(this.state.showQualifications)})
  }

  /**
   * Render the menu
   *
   * Ideally this should be done with a selection of
   * buttons and classes which extend ListComponent
   */
  render() {
    return <p className="App-intro">
             <li>
                <button onClick={this.handleQualificationsToggle}>Qualifications</button>
                <ListOfQualifications isVisible={this.state.showQualifications}/>
              </li>
              <li>
                <button onClick={this.handleSkillToggle}>Skills</button>
                <ListOfSkills isVisible={this.state.showSkills}/>
              </li>
           </p>
  }

  /**
   * Toggles 'booleans'
   * TODO: Refactor this to use actual booleans.
   * Are they even a thing in JS?
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
