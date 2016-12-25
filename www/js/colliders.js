'use strict';

let store;

const gameOver = () => store.dispatch({ type: 'GAMEOVER' });

//Food collision detector
const foodCollider = () => {
  const state = store.getState();
  const head = state.snake.position[state.snake.position.length - 1];

  if (head[0] === state.food.x && head[1] === state.food.y) {
    store.dispatch({ type: 'EAT' });
  }
};

//Snake crashes with wall detector
const boundsCollider = () => {
  const state = store.getState();
  if( !state.game.running ) {
    return;
  }
  const position = state.snake.position;
  const head = position[position.length - 1];
  if (head[0] >= state.options.bounds.height ||
      head[0] < 0 ||
      head[1] < 0 ||
      head[1] >= state.options.bounds.width) {
    gameOver();
  }
}

//Snake crashes onto itself detector
const itselfCollider = () => {
  const state = store.getState();
  if( !state.game.running ) {
    return;
  }
  const [head, ...body] = state.snake.position;
  if (body.some((bodyPart) => bodyPart.toString() === head.toString())) {
    gameOver();
  }
}

export const setupColliders = (newStore) => {
  store = newStore;
  store.subscribe(itselfCollider);
  store.subscribe(foodCollider);
  store.subscribe(boundsCollider);
}

