'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Game from './game';

const position = [[1,1], [1,2], [2,2],[3,2]];
const snake = { position };

ReactDOM.render(
  <Game snake={snake}/>,
  document.getElementById('root')
);

