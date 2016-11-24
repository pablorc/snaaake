'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Snake from './snake';

class Game extends React.Component {
  render() {
    console.log('game', this.props);
    return (
      <div className="game">
        <h1>Game</h1>
        <Snake position={this.props.snake.position}/>
      </div>
    );
  }
}

export default Game;
