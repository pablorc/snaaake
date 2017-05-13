import { game } from '../www/js/reducers/game.js';

test('EAT adds 100 points to score', () => {
  const stateBefore = {
    score: 200,
    highScores: []

  }
  const action = {
    type: 'EAT'
  }
  const scoreAfter = 300

  expect(game(stateBefore, action).score).toEqual(scoreAfter);
});

describe('on GAMEOVER action', () => {
  test('The game is finished', () => {
    const stateBefore = {
      running: true,
      highScores: []
    }
    const action = {
      type: 'GAMEOVER'
    }
    const runningAfter = false;

    expect(game(stateBefore, action).running).toEqual(runningAfter);
  });

  test('It does not increment the score', () => {
    const stateBefore = {
      score: 200,
      running: true,
      highScores: []

    }
    const action = {
      type: 'GAMEOVER'
    }

    const scoreAfter = 200;

    expect(game(stateBefore, action).score).toEqual(scoreAfter);
  });

  test('Adds the score to the high scores', () => {
    const stateBefore = {
      score: 200,
      running: true,
      highScores: []
    }
    const action = {
      type: 'GAMEOVER'
    }
    const highScoresAfter = [200]

      expect(game(stateBefore, action).highScores).toEqual(highScoresAfter);
  });

  test('Does not add the score to the high scores if is less than all of them', () => {
    const highScores =  [1000, 1000, 1000, 1000, 1000];
    const stateBefore = {
      score: 200,
      running: true,
      highScores
    }
    const action = {
      type: 'GAMEOVER'
    }
      expect(game(stateBefore, action).highScores).toEqual(highScores);
  });
});
