'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import Game from './game';
import reducer from './reducers/reducers';
import { setupColliders } from './colliders';
import { setupRunControls, setupOptionsControls } from './controls';

import { saveSnapshot } from './api/snapshot';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

setupColliders(store);
setupOptionsControls(store);
setupRunControls(store);

const render = () => {
  ReactDOM.render(
      <Game store={store} state={store.getState()} bounds={store.getState().options.bounds}/>,
      document.getElementById('root')
  );
}

store.subscribe(render);
render();


//store.subscribe(() => saveSnapshot(store.getState()));
// TODO: Enqueue savings at the server or explore more efficient ways.

// Timer
const intervalId = setInterval( () => {
  if( store.getState().game.running ){
    store.dispatch({type: 'MOVE'});
  }
}, 50);
