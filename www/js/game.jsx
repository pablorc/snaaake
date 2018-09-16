'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Food from './components/food';
import GameOVerWindow from './components/game_over_window';
import InfoArea from './components/info_area';
import Maze from './components/maze';
import StartWindow from './components/start_window';
import Snake from './components/snake';

class Game extends React.Component {

  constructor(props) {
    super(props);
  }

  renderWindow() {
    if(this.props.state.game.justLanded) {
      return <StartWindow store={this.props.store} />
    } else {
      return <GameOVerWindow store={this.props.store} gameOver={!this.props.state.game.running} score={this.props.state.game.score} savedHighScore={this.props.state.game.savedHighScore}/>
    }
  }

  renderGameAssets() {
    if(this.props.state.game.justLanded) {
      return;
    }
    return (<div>
      <div>
        <Snake position={this.props.state.snake.position}/>
      </div>
      <Food x={this.props.state.food.x} y={this.props.state.food.y} />
    </div>)
  }

  render() {
    return (
      <div className="game">
        <h1 className="game__title">Snaaake!!</h1>
        <span className="game__score">{this.props.state.game.score}</span>
        <Maze width={this.props.bounds.width} height={this.props.bounds.height}>
          { this.renderGameAssets() }
        </Maze>
        { this.renderWindow() }

        <InfoArea highScores={this.props.state.game.highScores}/>
      </div>
    );
  }
};

export default Game;
