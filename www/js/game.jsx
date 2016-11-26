'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Snake from './snake';

class Game extends React.Component {

  getInitialState() {
    return {
      snake: {
        position: [[1,1], [1,2], [2,2],[3,2]
      },
      maze: {
        width: 30,
        height: 30
      }
    }
  },

  render() {
    return (
      <div className="game">
        <h1>Game</h1>
        <Snake position={this.props.snake.position}/>
      </div>
    );
  }
}

export default Game;
