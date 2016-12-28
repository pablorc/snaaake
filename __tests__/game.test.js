import { game } from '../www/js/reducers/game.js';

test('EAT adds 100 points to score', () => {
  const stateBefore = {
    score: 200
  }
  const action = {
    type: 'EAT'
  }
  const stateAfter = {
    score: 300
  }

  expect(game(stateBefore, action)).toEqual(stateAfter);
});

