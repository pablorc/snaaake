'use strict';

const snakeInitialState = {
  position: [[1,1], [1,2]],
  head: 'right'
}

const isInPlain = (direction, plane) => plane.some( (dir) => dir === direction );
const isHorizontal = (direction) => isInPlain(direction, ['left', 'right']);
const isVertical = (direction) => isInPlain(direction, ['up', 'down']);

const newPosition = (coords, direction) => {
  const verticalMove = isVertical(direction) ? 1 : 0;
  const horizontalMove = isHorizontal(direction) ? 1 : 0;
  const upwards = isInPlain(direction, ['up', 'left']) ? -1 : 1;

  return [
    coords[0] + (upwards * verticalMove),
    coords[1] + (upwards * horizontalMove)
  ]
};

const canTurn = (oldDirection, newDirection) => {
  return !(isHorizontal(oldDirection) && isHorizontal(newDirection)) &&
         !(isVertical(oldDirection) && isVertical(newDirection));
}

const snake = (state = snakeInitialState, action) =>  {
  switch(action.type) {
    case 'MOVE':
      return {
        ...state,
        position: [
          ...state.position.slice(state.justEat ? 0 : 1),
          newPosition(state.position[state.position.length - 1], state.head),
        ],
        head: state.head,
        justEat: false
      };
    case 'CHANGE_DIR':
      return {
        ...state,
        head: canTurn(state.head, action.direction) ? action.direction : state.head
      };
    case 'EAT':
      return {
        ...state,
        justEat: true
      };
    default:
      return state;
  }
}

export { snake };
