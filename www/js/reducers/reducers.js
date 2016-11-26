import { snake } from './snake';

const reducer = (state = {}, action) => {
  return {
    snake: snake(state.snake, action),
    foods: []
  }
}

export default reducer;
