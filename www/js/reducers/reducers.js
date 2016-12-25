'use strict';

import { combineReducers } from 'redux';

import { food } from './food';
import { game } from './game';
import { snake } from './snake';
import { options } from './options';

export default combineReducers({
  options,
  snake,
  food,
  game
});
