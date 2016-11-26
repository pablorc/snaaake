'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Maze extends React.Component {
  getStyles() {
    const pixelSize = 15;

    return {
      width:  `${this.props.width * pixelSize}px`,
      height: `${this.props.height * pixelSize}px`
    };
  }

  render() {
    return (
      <div className="maze" style={this.getStyles()}>
        {this.props.children}
      </div>
    );
  }
}

export default Maze;


