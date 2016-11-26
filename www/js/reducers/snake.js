'use strict';

const snakeInitialState = {
  position: [[1,1], [1,2]],
  head: 'right'
}

const newPosition = (coords, direction) => {
  const verticalMove = direction === 'up' || direction === 'down' ? 1 : 0;
  const horizontalMove = direction === 'left' || direction === 'right' ? 1 : 0;
  const upwards = direction === 'up' || direction === 'left' ? -1 : 1;

  return [
    coords[0] + (upwards * verticalMove),
    coords[1] + (upwards * horizontalMove)
  ]
};

const snake = (state = snakeInitialState, action) =>  {
  switch(action.type) {
    case 'MOVE':
      return {
        position: [
          ...state.position.slice(1),
          newPosition(state.position[state.position.length - 1], state.head)
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
