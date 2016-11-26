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
      const upwards = state.head === 'up' || state.head === 'left' ? -1 : 1;
      return {
        position: [
          ...state.position.slice(1),
          [
            state.position[state.position.length - 1][0] + (upwards * verticalMove),
            state.position[state.position.length - 1][1] + (upwards * horizontalMove)
          ]
        ],
        head: state.head
      };
    case 'CHANGE_DIR':
      return {
        ...state,
        head: action.direction
      };
    default:
      return state;
  }
}

export { snake };
