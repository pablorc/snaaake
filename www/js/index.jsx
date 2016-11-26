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

setInterval( () => store.dispatch({type: 'MOVE'}), 500);
