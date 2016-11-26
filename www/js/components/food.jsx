'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Food extends React.Component {
  positionPart(x, y) {
    const pixelSize = 15;
    return {
      top: `${x * pixelSize}px`,
      left: `${y * pixelSize}px`
    }
  }

  render() {
    return (
      <div className="food" style={this.positionPart(this.props.x, this.props.y)} />
    );
  }
}

export default Food;


