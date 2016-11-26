import { score } from '../www/js/reducers/score.js';

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

  expect(score(stateBefore, action)).toEqual(stateAfter);
});

