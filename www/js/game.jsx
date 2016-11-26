'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Food from './components/food';
import Maze from './components/maze';
import Snake from './components/snake';

const Game =  React.createClass({

  getInitialState() {
    return {
      snake: {
        position: [[1,1], [1,2], [2,2],[3,2]]
      },
      foods: [{
        x: 7,
        y: 12
      }]
    }
  },

  render() {
    return (
      <div className="game">
        <h1>Snaaake</h1>
        <Maze width={30} height={30}>
          <Snake position={this.state.snake.position}/>
          {this.state.foods.map((food) => <Food x={food.x} y={food.y} /> )}
        </Maze>
      </div>
    );
  }
});

export default Game;
