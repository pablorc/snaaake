'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Food extends React.Component {
  positionPart(part) {
    const pixelSize = 15;
    return {
      top: `${part[0] * pixelSize}px`,
      left: `${part[1] * pixelSize}px`
    }
  }

  render() {
    return (
      <div className="food" style={this.positionPart([this.props.x, this.props.y])} />
    );
  }
}

export default Food;


