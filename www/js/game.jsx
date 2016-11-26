'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Snake from './components/snake';
import Maze from './components/maze';

const Game =  React.createClass({

  getInitialState() {
    return {
      snake: {
        position: [[1,1], [1,2], [2,2],[3,2]]
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
        <h1>Snaaake</h1>
        <Maze width={this.state.maze.width} height={this.state.maze.height}>
          <Snake position={this.props.snake.position}/>
        </Maze>
      </div>
    );
  }
});

export default Game;
