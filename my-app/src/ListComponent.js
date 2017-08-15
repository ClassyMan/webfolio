import React, { Component } from 'react';

class ListComponent extends Component {



  render() {
    if(this.props.isVisible === 'true') {
        return (
          <div>
            {this.props.items.map((item, i) =>
              <li key ={'item_' + i}>{item}</li>
            )}
          </div>
        )
    } else {
      return null;
    }
  }
}

ListComponent.defaultProps = {
  isVisible: false,
  items: ['- No results shown -']
}

export default ListComponent;
