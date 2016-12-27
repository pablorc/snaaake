'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Food from './components/food';
import Maze from './components/maze';
import Snake from './components/snake';

class Game extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="game">
        <h1 className="game__title">Snaaake!!</h1>
        <span className="game__score">{this.props.state.game.score}</span>
        <Maze width={this.props.bounds.width} height={this.props.bounds.height}>
          <div>
            <Snake position={this.props.state.snake.position}/>
          </div>
          <Food x={this.props.state.food.x} y={this.props.state.food.y} />
        </Maze>
        <section className="game__info">
        <h2>Controls</h2>
        <p>
        Press <strong>R</strong> to play and <strong>arrow keys</strong> or <strong>wasd</strong> to move
        </p>
        </section>
      </div>
    );
  }
};

export default Game;
