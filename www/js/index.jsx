'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import Game from './game';
import reducer from './reducers/reducers';

const store = createStore(reducer);
store.dispatch({type: ''});

ReactDOM.render(
  <Game store={store.getState()}/>,
  document.getElementById('root')
);

setInterval( () => store.dispatch({type: 'MOVE'}), 1000);
