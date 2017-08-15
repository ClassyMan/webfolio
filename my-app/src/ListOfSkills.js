import React, { Component } from 'react';
import ListComponent from './ListComponent.js';

/**
 * This component lists skills when required
 */
class ListOfSkills extends ListComponent {}

/**
 * The items to display
 */
ListOfSkills.defaultProps = {
  items: ['Java - What I do for my day job',
          'Javascript/React - This website is written in it',
          'Agile - Obviously',
          'TDD - I love testing more than is healthy']
}

export default ListOfSkills;
