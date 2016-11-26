'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Snake extends React.Component {
  positionPart(part) {
    const pixelSize = 15;
    return {
      top: `${part[0] * pixelSize}px`,
      left: `${part[1] * pixelSize}px`,
    }
  }

  render() {
    return (
      <div className="snake">
        {this.props.position.map( (part) => {
          return <div className="snake__body" key={part} style={this.positionPart(part)} />
        })}
      </div>
    );
  }
}

export default Snake;

