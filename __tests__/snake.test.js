import { snake } from '../www/js/reducers/snake';

test('Gets initial state', () => {
  expect(snake(undefined, {}))
    .toEqual({
      position: [[1,1], [1,2]],
      head: 'right'
    });
});

test('Moves to the next pixel in the correct direction', () => {
  const stateBefore = {
    position: [[1,1], [1,2]],
    head: 'down'
  };
  const action = {
    type: 'MOVE'
  }
  const stateAfter = {
    position: [[1,2], [2,2]],
    head: 'down'
  }

  expect(snake(stateBefore, action)).toEqual(stateAfter);
});
