'use strict';

const snakeInitialState = {
  position: [[1,1], [1,2]],
  head: 'right'
}

const snake = (state = snakeInitialState, action) =>  {
  switch(action.type) {
    case 'MOVE':
      return state;
    default:
      return state;
  }
}

export { snake };
