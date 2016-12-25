'use strict';

import { combineReducers } from 'redux';

import { food } from './food';
import { score } from './score';
import { snake } from './snake';
import { options } from './options';

export default combineReducers({
  options,
  snake,
  food,
  score
});
