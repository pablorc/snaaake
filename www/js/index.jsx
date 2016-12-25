'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import Game from './game';
import reducer from './reducers/reducers';
import { setupColliders } from './colliders';

const store = createStore(reducer);

setupColliders(store);

const render = () => {
  ReactDOM.render(
      <Game store={store.getState()} bounds={bounds}/>,
      document.getElementById('root')
  );
}

store.subscribe(render);
render();

// Timer
const intervalId = setInterval( () => store.dispatch({type: 'MOVE'}), 50);

// Keyboard control
window.addEventListener("keydown", event => {
  const movement = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',

    65: 'left',  // w
    87: 'up',    // a
    68: 'right', // s
    83: 'down',   // d

    72: 'left',  // h
    74: 'down',  // j
    75: 'up',    // k
    76: 'right'  // l
  };
  if( movement[event.keyCode] ) {
    store.dispatch({
      type: 'CHANGE_DIR',
      direction: movement[event.keyCode]
    });
  }
}, true);

const gameOver = () => {
    console.log('GAME OVER');
    clearInterval(intervalId);
}

