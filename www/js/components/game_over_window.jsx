'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class GameOverWindow extends React.Component {

  saveHighScore(store, score) {
    const name = document.getElementById('highScoreName').value;

    store.dispatch({ type: 'SAVE_HIGHSCORE', name: name})
  }

  renderBottom(store, score, savedHighScore) {
    if(savedHighScore) {
      return <button onClick={ () => store.dispatch({type: 'RESTART'})} className="window__send" >RESTART</button>;
    } else {
      return this.renderHighScoreInput(store, score, savedHighScore);
    }
  }

  renderHighScoreInput(store, score, savedHighScore) {
    return (
      <div>
        <p>Enter your name:</p>
        <input type="text" className="window__input" id="highScoreName" placeholder="AAA" maxLength="3" />
        <button className="window__send" onClick={() => !savedHighScore  && this.saveHighScore(store, score)}>SEND</button>
      </div>
    );
  }

  render() {

    const shownClass = this.props.gameOver ? '' : 'u-hidden';
    const classes = `window ${shownClass}`;

    const bottomArea = this.renderBottom(this.props.store, this.props.score, this.props.savedHighScore);

    return (
      <div className={classes}>
        <h1>Game Over</h1>
        <h2>Your score is: <span className="window__score">{this.props.score}</span></h2>
        {bottomArea}

      </div>
    );
  }
};

export default GameOverWindow;
