'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Food from './components/food';
import InfoArea from './components/info_area';
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

        <InfoArea highScores={this.props.state.game.highScores}/>
      </div>
    );
  }
};

export default Game;
