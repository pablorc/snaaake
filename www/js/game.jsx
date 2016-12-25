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
        <h1 className="game__title">Snaaake!!</h1>
        <Maze width={this.props.bounds.width} height={this.props.bounds.height}>
          <Snake position={this.props.store.snake.position}/>
          <Food x={this.props.store.food.x} y={this.props.store.food.y} />
        </Maze>
        <span className="game__score">{this.props.store.game.score}</span>
      </div>
    );
  }
});

export default Game;
