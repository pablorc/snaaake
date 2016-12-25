'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import Game from './game';
import reducer from './reducers/reducers';
import { setupColliders } from './colliders';
import { setupRunControls, setupOptionsControls } from './controls';

const store = createStore(reducer);

setupColliders(store);
setupOptionsControls(store);
setupRunControls(store);

const render = () => {
  ReactDOM.render(
      <Game store={store.getState()} bounds={store.getState().options.bounds}/>,
      document.getElementById('root')
  );
}

store.subscribe(render);
render();

// Timer
const intervalId = setInterval( () => store.dispatch({type: 'MOVE'}), 50);


const gameOver = () => {
    console.log('GAME OVER');
    clearInterval(intervalId);
}

