'use strict';

import { combineReducers } from 'redux';

import { food } from './food';
import { score } from './score';
import { snake } from './snake';

export default combineReducers({
  snake,
  food,
  score
});
