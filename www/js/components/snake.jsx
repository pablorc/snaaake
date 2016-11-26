'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Snake extends React.Component {
  render() {
    return (
      <div className="snake">
        {this.props.position.map( (part) => {
          const [x, y] = part;
          return <div className="snake__body" key={part}> [{x}, {y}] </div>
        })}
      </div>
    );
  }
}

export default Snake;

