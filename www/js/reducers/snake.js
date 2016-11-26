'use strict';

const snakeInitialState = {
  position: [[1,1], [1,2]],
  head: 'right'
}

const snake = (state = snakeInitialState, action) =>  {
  switch(action.type) {
    case 'MOVE':
      const verticalMove = state.head === 'up' || state.head === 'down' ? 1 : 0;
      const horizontalMove = state.head === 'left' || state.head === 'right' ? 1 : 0;
      return {
        position: [
          ...state.position.slice(1),
          [
            state.position[state.position.length - 1][0] + verticalMove,
            state.position[state.position.length - 1][1] + horizontalMove
          ]
        ],
        head: state.head
      };
    default:
      return state;
  }
}

export { snake };
