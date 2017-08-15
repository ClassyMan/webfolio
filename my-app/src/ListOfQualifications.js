import React, { Component } from 'react';
import ListComponent from './ListComponent.js';

/**
 * This component lists Qualifications when required
 */
class ListOfQualifications extends ListComponent {}

/**
 * The items to display
 */
ListOfQualifications.defaultProps = {
  items: ['MEng - Masters in electronic engineering - University of Warwick']
}

export default ListOfQualifications;
