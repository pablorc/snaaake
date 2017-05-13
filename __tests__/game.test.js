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

test('GAMEOVER finish the game', () => {
  const stateBefore = {
    running: true
  }
  const action = {
    type: 'GAMEOVER'
  }
  const stateAfter = {
    running: false
  }

  expect(game(stateBefore, action)).toEqual(stateAfter);
});

test('GAMEOVER does not add score', () => {
  const stateBefore = {
    score: 200,
    running: true
  }
  const action = {
    type: 'GAMEOVER'
  }
  const stateAfter = {
    score: 200,
    running: false
  }

  expect(game(stateBefore, action)).toEqual(stateAfter);
});
