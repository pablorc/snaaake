'use strict';

import { combineReducers } from 'redux';

import { food } from './food';
import { snake } from './snake';


export default combineReducers({
  snake,
  food
});
