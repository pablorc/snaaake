'use strict';

import { combineReducers } from 'redux';

import { snake } from './snake';

const foods = (state = [],  action) => state;

export default combineReducers({
  snake,
  foods
});
