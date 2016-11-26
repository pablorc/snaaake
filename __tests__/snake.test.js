import { snake } from '../www/js/reducers/snake';

test('Gets initial state', () => {
  expect(snake(undefined, {}))
    .toEqual({
      position: [[1,1], [1,2]],
      head: 'right'
    });
});

test('Moves to the next pixel down', () => {
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

test('Moves to the next pixel right', () => {
  const stateBefore = {
    position: [[1,1], [1,2]],
    head: 'right'
  };
  const action = {
    type: 'MOVE'
  }
  const stateAfter = {
    position: [[1,2], [1,3]],
    head: 'right'
  }

  expect(snake(stateBefore, action)).toEqual(stateAfter);
});

test('Moves to the next pixel up', () => {
  const stateBefore = {
    position: [[1,1], [1,2]],
    head: 'up'
  };
  const action = {
    type: 'MOVE'
  }
  const stateAfter = {
    position: [[1,2], [0,2]],
    head: 'up'
  }

  expect(snake(stateBefore, action)).toEqual(stateAfter);
});

test('Moves to the next pixel left', () => {
  const stateBefore = {
    position: [[2,2], [1,2]],
    head: 'left'
  };
  const action = {
    type: 'MOVE'
  }
  const stateAfter = {
    position: [[1,2], [1,1]],
    head: 'left'
  }

  expect(snake(stateBefore, action)).toEqual(stateAfter);
});

