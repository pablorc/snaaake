'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Food from './components/food';
import Maze from './components/maze';
import Snake from './components/snake';

const Game =  React.createClass({

  render() {
    return (
      <div className="game">
        <h1>Snaaake</h1>
        <Maze width={30} height={30}>
          <Snake position={this.props.store.snake.position}/>
          {this.props.store.foods.map((food) => <Food x={food.x} y={food.y} /> )}
        </Maze>
      </div>
    );
  }
});

export default Game;
