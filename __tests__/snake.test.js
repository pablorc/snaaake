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
    head: 'down',
    justEat: false
  };
  const action = {
    type: 'MOVE'
  }
  const stateAfter = {
    position: [[1,2], [2,2]],
    head: 'down',
    justEat: false
  }

  expect(snake(stateBefore, action)).toEqual(stateAfter);
});

test('Moves to the next pixel right', () => {
  const stateBefore = {
    position: [[1,1], [1,2]],
    head: 'right',
    justEat: false
  };
  const action = {
    type: 'MOVE'
  }
  const stateAfter = {
    position: [[1,2], [1,3]],
    head: 'right',
    justEat: false
  }

  expect(snake(stateBefore, action)).toEqual(stateAfter);
});

test('Moves to the next pixel up', () => {
  const stateBefore = {
    position: [[1,1], [1,2]],
    head: 'up',
    justEat: false
  };
  const action = {
    type: 'MOVE'
  }
  const stateAfter = {
    position: [[1,2], [0,2]],
    head: 'up',
    justEat: false
  }

  expect(snake(stateBefore, action)).toEqual(stateAfter);
});

test('Moves to the next pixel left', () => {
  const stateBefore = {
    position: [[2,2], [1,2]],
    head: 'left',
    justEat: false
  };
  const action = {
    type: 'MOVE'
  }
  const stateAfter = {
    position: [[1,2], [1,1]],
    head: 'left',
    justEat: false
  }

  expect(snake(stateBefore, action)).toEqual(stateAfter);
});

test('Changes direction', () => {
  const stateBefore = {
    position: [[2,2], [1,2]],
    head: 'left',
    justEat: false
  };
  const action = {
    type: 'CHANGE_DIR',
    direction: 'down'
  }
  const stateAfter = {
    position: [[2,2], [1,2]],
    head: 'down',
    justEat: false
  }

  expect(snake(stateBefore, action)).toEqual(stateAfter);
});

test('Adds a justEat flag after eat', () => {
  const stateBefore = {
    position: [[2,2], [1,2]],
    head: 'left'
  };
  const action = {
    type: 'EAT'
  };
  const stateAfter = {
    position: [[2,2], [1,2]],
    head: 'left',
    justEat: true
  };

  expect(snake(stateBefore, action)).toEqual(stateAfter);
});

test('Movement removes a justEat flag and makes the snake bigger', () => {
  const stateBefore = {
    position: [[2,2], [1,2]],
    head: 'left',
    justEat: true
  };
  const action = {
    type: 'MOVE'
  };
  const stateAfter = {
    position: [[2,2], [1,2], [1,1]],
    head: 'left',
    justEat: false
  };

  expect(snake(stateBefore, action).justEat).toBe(false);
});
