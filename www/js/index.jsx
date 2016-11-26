'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import Game from './game';
import reducer from './reducers/reducers';

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
      <Game store={store.getState()}/>,
      document.getElementById('root')
  );
}

store.subscribe(render);
render();

// Timer
setInterval( () => store.dispatch({type: 'MOVE'}), 500);

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
    83: 'down'   // d
  };
  if( movement[event.keyCode] ) {
    store.dispatch({
      type: 'CHANGE_DIR',
      direction: movement[event.keyCode]
    });
  }
}, true);

//Food collision detector
const foodCollider = () => {
  const state = store.getState();

  if (state.snake.position.filter( ([x,y]) => x === state.food.x && y === state.food.y).length === 1) {
    store.dispatch({ type: 'EAT' });
  }
};

store.subscribe(foodCollider);
