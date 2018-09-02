'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class InfoArea extends React.Component {
  render() {
    return (
       <section className="game__info">
        <div className="game__info__area">
          <h2>Controls</h2>
          <p>
          Press <strong>R</strong> to play and <strong>arrow keys</strong> or <strong>wasd</strong> to move
          </p>
        </div>
        <div className="game__info__area">
          <h2 className="u-text-align-right">Highscores</h2>
          <ul className="highscores">
          {
            this.props.highScores.map(function(highScore) {
              return <li className="highscores__highscore">{highScore}</li>;
            })
          }
          </ul>
        </div>
        </section>
    );
  }
}

export default InfoArea;


